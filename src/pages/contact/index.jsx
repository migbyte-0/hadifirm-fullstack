import InnerLayout from "@/Layout/InnerLayout";
import ContactHeroDynamic from "@/components/Hero/ContactHeroDynamic";
import CounterContactDynamic from "@/components/Counter/CounterContactDynamic";
import MapOneDynamic from "@/components/Map/MapOneDynamic";
import ContactInfoDynamic from "@/components/Contact/ContactInfoDynamic";
import { ContactContentProvider } from "@/context/ContactContentContext";

export default function Contact() {
  return (
    <ContactContentProvider>
      <InnerLayout>
        <main id="wrapper" className="wrapper">
          <ContactHeroDynamic />
          <MapOneDynamic />
          <ContactInfoDynamic />
          <CounterContactDynamic classNames="pt-100 pb-110" />
        </main>
      </InnerLayout>
    </ContactContentProvider>
  );
}
