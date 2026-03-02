import { MinimalSocial } from "./minimal-social"

export function MinimalFooter() {
  return (
    <footer className="py-12 mt-16 border-t border-border">
      <p className="text-muted-foreground text-base">Handcrafted by Rajan Chavada.</p>
      <MinimalSocial />
    </footer>
  )
}
