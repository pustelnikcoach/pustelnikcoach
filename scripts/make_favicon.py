"""Vyrobí favikonku: zelená dlaždice (rolex green) + bílý panáček s činkou.
Zdroj: public/images/logo-transparent.png (bílý obrys na průhledném pozadí).
Výstup:
  - app/icon.png        (zaoblené rohy, klasická favikona v záložce)
  - app/apple-icon.png  (plná zelená čtvercová, iOS si rohy zaoblí sám)
"""
from PIL import Image, ImageDraw

SRC = "public/images/logo-transparent.png"
GREEN = (15, 76, 58, 255)  # #0F4C3A — rolex green (brand emerald)


def build(size: int, rounded: bool, pad_frac: float) -> Image.Image:
    # 1) Načti logo a ořízni na obsah (bounding box neprůhledných pixelů)
    logo = Image.open(SRC).convert("RGBA")
    logo = logo.crop(logo.getbbox())

    # 2) Zajisti čistě bílý panáček (zachovej anti-aliasing přes alfa masku)
    alpha = logo.split()[3]
    solid_white = Image.new("RGBA", logo.size, (255, 255, 255, 255))
    transparent = Image.new("RGBA", logo.size, (255, 255, 255, 0))
    logo = Image.composite(solid_white, transparent, alpha)

    # 3) Pozadí — zelená dlaždice
    bg = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(bg)
    if rounded:
        radius = int(size * 0.22)
        draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=GREEN)
    else:
        draw.rectangle([0, 0, size - 1, size - 1], fill=GREEN)

    # 4) Zmenši panáčka do plochy s okrajem a vycentruj
    max_side = int(size * (1 - 2 * pad_frac))
    lw, lh = logo.size
    scale = min(max_side / lw, max_side / lh)
    nw, nh = max(1, int(lw * scale)), max(1, int(lh * scale))
    logo = logo.resize((nw, nh), Image.LANCZOS)
    bg.alpha_composite(logo, ((size - nw) // 2, (size - nh) // 2))
    return bg


# Favikona do prohlížeče (zaoblená)
build(256, rounded=True, pad_frac=0.18).save("app/icon.png")
# iOS home screen (plná čtvercová, větší)
build(180, rounded=False, pad_frac=0.16).save("app/apple-icon.png")
print("OK: app/icon.png + app/apple-icon.png")
