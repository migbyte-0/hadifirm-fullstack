import { useEffect } from "react";

export default function BootstrapPlugin() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return;
}
