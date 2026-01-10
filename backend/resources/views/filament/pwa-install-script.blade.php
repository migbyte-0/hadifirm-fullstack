<script>
    let deferredPrompt = null;
    let isAppInstalled = false;

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
        isAppInstalled = true;
    }

    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        updateInstallButton();
    });

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
        isAppInstalled = true;
        deferredPrompt = null;
        updateInstallButton();
    });

    function updateInstallButton() {
        const installBtn = document.getElementById('pwa-install-btn');
        if (!installBtn) return;

        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        
        // Find the text span inside the button
        const textSpan = installBtn.querySelector('span');
        const iconSvg = installBtn.querySelector('svg');
        
        if (isAppInstalled) {
            // App is already installed
            if (textSpan) textSpan.textContent = 'التطبيق مثبت ✓';
            installBtn.style.opacity = '0.5';
            installBtn.style.pointerEvents = 'none';
        } else if (isMobile) {
            if (textSpan) textSpan.textContent = 'إضافة للشاشة الرئيسية';
            if (iconSvg) {
                iconSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />';
            }
        } else {
            if (textSpan) textSpan.textContent = 'إضافة لسطح المكتب';
            if (iconSvg) {
                iconSvg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />';
            }
        }
    }

    function installPWA() {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isAppInstalled) {
            showNotification('التطبيق مثبت بالفعل', 'info');
            return;
        }

        if (deferredPrompt) {
            // Chrome/Edge/Samsung Internet - show native install prompt
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    showNotification('جاري تثبيت التطبيق...', 'success');
                }
                deferredPrompt = null;
            });
        } else if (isIOS) {
            // iOS - show instructions
            showIOSInstallInstructions();
        } else if (isMobile) {
            // Other mobile browsers
            showNotification('اضغط على زر المشاركة ثم اختر "إضافة للشاشة الرئيسية"', 'info');
        } else {
            // Desktop browsers that don't support beforeinstallprompt
            showNotification('اضغط Ctrl+D لإضافة الموقع للمفضلة، أو استخدم قائمة المتصفح لتثبيت التطبيق', 'info');
        }
    }

    function showIOSInstallInstructions() {
        // Create modal for iOS instructions
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px;" onclick="this.remove()">
                <div style="background: #1e293b; border-radius: 16px; padding: 24px; max-width: 320px; text-align: center; direction: rtl;" onclick="event.stopPropagation()">
                    <div style="font-size: 48px; margin-bottom: 16px;">📲</div>
                    <h3 style="color: #f59e0b; font-size: 18px; margin-bottom: 16px;">إضافة للشاشة الرئيسية</h3>
                    <p style="color: #94a3b8; font-size: 14px; line-height: 1.6; margin-bottom: 16px;">
                        1. اضغط على زر المشاركة <span style="font-size: 20px;">⬆️</span><br>
                        2. مرر للأسفل واختر<br>
                        <strong style="color: #fff;">"إضافة للشاشة الرئيسية"</strong>
                    </p>
                    <button onclick="this.parentElement.parentElement.remove()" style="background: #f59e0b; color: #000; border: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; cursor: pointer;">
                        فهمت
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    function showNotification(message, type = 'info') {
        // Use Filament's notification system if available
        if (window.Livewire) {
            window.Livewire.dispatch('notify', {
                title: message,
                type: type,
            });
        } else {
            alert(message);
        }
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', updateInstallButton);
    
    // Also update after Livewire navigation (SPA mode)
    document.addEventListener('livewire:navigated', updateInstallButton);
    
    // Retry after a short delay to handle dynamic content
    setTimeout(updateInstallButton, 1000);
</script>

<style>
    #pwa-install-btn {
        transition: all 0.3s ease;
    }
    
    #pwa-install-btn:hover {
        transform: scale(1.02);
    }
    
    .pwa-install-item {
        border: 1px dashed rgba(245, 158, 11, 0.3) !important;
        margin: 8px !important;
        border-radius: 8px !important;
    }
</style>
