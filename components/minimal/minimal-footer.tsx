import { MinimalSocial } from "./minimal-social"

export function MinimalFooter() {
  return (
    <footer className="py-12 mt-16 border-t border-sage/30">
      <p className="text-sage text-sm">Handcrafted by Rajan Chavada.</p>
      <MinimalSocial />
    </footer>
  )
}
