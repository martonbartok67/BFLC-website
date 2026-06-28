"use client"

import { useCallback, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Menu, X } from "lucide-react"
import styles from "./staggered-menu.module.css"

export interface StaggeredMenuItem {
  label: string
  ariaLabel?: string
  link: string
  external?: boolean
}

export interface StaggeredMenuSocialItem {
  label: string
  link: string
}

interface StaggeredMenuProps {
  items?: StaggeredMenuItem[]
  socialItems?: StaggeredMenuSocialItem[]
  ctaLabel?: string
  ctaLink?: string
  /** Two colors for the brief animated flash that slides in behind the panel on open. */
  colors?: [string, string]
  /** Button color when the menu is closed/open. */
  buttonColor?: string
  onOpenChange?: (open: boolean) => void
}

export function StaggeredMenu({
  items = [],
  socialItems = [],
  ctaLabel,
  ctaLink,
  colors = ["#102664", "#C5B0E1"],
  buttonColor = "currentColor",
  onOpenChange,
}: StaggeredMenuProps) {
  const [open, setOpen] = useState(false)
  const openRef = useRef(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const prelayersRef = useRef<HTMLDivElement>(null)
  const prelayerElsRef = useRef<HTMLDivElement[]>([])
  const openTlRef = useRef<gsap.core.Timeline | null>(null)
  const closeTweenRef = useRef<gsap.core.Tween | null>(null)
  const busyRef = useRef(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current
      const preContainer = prelayersRef.current
      if (!panel) return

      const layers = preContainer ? Array.from(preContainer.querySelectorAll<HTMLDivElement>("[data-sm-prelayer]")) : []
      prelayerElsRef.current = layers

      gsap.set([panel, ...layers], { xPercent: 100 })
    })
    return () => ctx.revert()
  }, [])

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current
    const layers = prelayerElsRef.current
    if (!panel) return null

    openTlRef.current?.kill()
    closeTweenRef.current?.kill()
    closeTweenRef.current = null

    const itemEls = Array.from(panel.querySelectorAll<HTMLElement>("[data-sm-label]"))
    const numberEls = Array.from(panel.querySelectorAll<HTMLElement>("[data-sm-numbered]"))
    const socialTitle = panel.querySelector<HTMLElement>("[data-sm-socials-title]")
    const socialLinks = Array.from(panel.querySelectorAll<HTMLElement>("[data-sm-social-link]"))

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 8 })
    if (numberEls.length) gsap.set(numberEls, { "--sm-num-opacity": 0 } as gsap.TweenVars)
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 })
    if (socialLinks.length) gsap.set(socialLinks, { y: 20, opacity: 0 })

    const tl = gsap.timeline({ paused: true })

    layers.forEach((el, i) => {
      tl.fromTo(el, { xPercent: 100 }, { xPercent: 0, duration: 0.45, ease: "power4.out" }, i * 0.07)
    })
    const lastTime = layers.length ? (layers.length - 1) * 0.07 : 0
    const panelInsertTime = lastTime + (layers.length ? 0.08 : 0)
    const panelDuration = 0.6

    tl.fromTo(panel, { xPercent: 100 }, { xPercent: 0, duration: panelDuration, ease: "power4.out" }, panelInsertTime)

    if (itemEls.length) {
      const itemsStart = panelInsertTime + panelDuration * 0.15
      tl.to(
        itemEls,
        { yPercent: 0, rotate: 0, duration: 0.9, ease: "power4.out", stagger: { each: 0.09, from: "start" } },
        itemsStart,
      )
      if (numberEls.length) {
        tl.to(
          numberEls,
          { duration: 0.5, ease: "power2.out", "--sm-num-opacity": 1, stagger: { each: 0.07, from: "start" } } as gsap.TweenVars,
          itemsStart + 0.1,
        )
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.45
      if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.4, ease: "power2.out" }, socialsStart)
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: { each: 0.06, from: "start" } },
          socialsStart + 0.05,
        )
      }
    }

    openTlRef.current = tl
    return tl
  }, [])

  const playOpen = useCallback(() => {
    if (busyRef.current) return
    busyRef.current = true
    const tl = buildOpenTimeline()
    if (tl) {
      tl.eventCallback("onComplete", () => {
        busyRef.current = false
      })
      tl.play(0)
    } else {
      busyRef.current = false
    }
  }, [buildOpenTimeline])

  const playClose = useCallback(() => {
    openTlRef.current?.kill()
    openTlRef.current = null
    const panel = panelRef.current
    const layers = prelayerElsRef.current
    if (!panel) return

    closeTweenRef.current?.kill()
    closeTweenRef.current = gsap.to([...layers, panel], {
      xPercent: 100,
      duration: 0.3,
      ease: "power3.in",
      overwrite: "auto",
      onComplete: () => {
        busyRef.current = false
      },
    })
  }, [])

  const toggleMenu = useCallback(() => {
    const target = !openRef.current
    openRef.current = target
    setOpen(target)
    onOpenChange?.(target)
    if (target) {
      playOpen()
    } else {
      playClose()
    }
  }, [playOpen, playClose, onOpenChange])

  const closeMenu = useCallback(() => {
    if (!openRef.current) return
    openRef.current = false
    setOpen(false)
    onOpenChange?.(false)
    playClose()
  }, [playClose, onOpenChange])

  return (
    <>
      <button
        className={styles.toggle}
        style={{ color: buttonColor }}
        aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
        aria-expanded={open}
        aria-controls="staggered-menu-panel"
        onClick={toggleMenu}
        type="button"
      >
        <span className={styles.icon} aria-hidden="true">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </span>
      </button>

      <div ref={prelayersRef} className={styles.prelayers} aria-hidden="true">
        {colors.map((c, i) => (
          <div key={i} data-sm-prelayer className={styles.prelayer} style={{ background: c }} />
        ))}
      </div>

      <div
        id="staggered-menu-panel"
        ref={panelRef}
        className={styles.panel}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.panelInner}>
          <ul className={styles.panelList} role="list">
            {items.map((it, idx) => (
              <li className={styles.panelItemWrap} key={it.label + idx} data-sm-numbered>
                <a
                  className={styles.panelItem}
                  href={it.link}
                  aria-label={it.ariaLabel ?? it.label}
                  target={it.external ? "_blank" : undefined}
                  rel={it.external ? "noopener noreferrer" : undefined}
                  onClick={closeMenu}
                >
                  <span className={styles.panelItemLabel} data-sm-label>
                    {it.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {ctaLabel && ctaLink && (
            <div className={styles.ctaWrap}>
              <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                {ctaLabel}
              </a>
            </div>
          )}

          {socialItems.length > 0 && (
            <div className={styles.socials}>
              <h3 className={styles.socialsTitle} data-sm-socials-title>
                Kövess minket
              </h3>
              <ul className={styles.socialsList} role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i}>
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialsLink}
                      data-sm-social-link
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {open && (
        <button
          aria-hidden="true"
          tabIndex={-1}
          onClick={closeMenu}
          className="fixed inset-0 z-[58] cursor-default bg-transparent"
        />
      )}
    </>
  )
}
