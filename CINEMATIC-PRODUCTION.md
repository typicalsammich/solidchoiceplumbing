# The Blueprint Becomes Reality — Solid Choice production specification

No video or soundscape has been rendered. The generated still is illustrative, not extracted from footage. Keep static fallback until actual approved assets exist.

Brand: Solid Choice Plumbing; (562) 641-6364; tel:+15626416364; black/chrome/electric blue. Never include DLR phone/license/branding or Menifee claims. Use original SC logo when supplied.

## 12-second continuous sequence
0–2: Real deep-blue plumbing drawing on worn drafting table; warm pendant, pencil, metal tools. 35mm three-quarter push-in, real paper/shadows/depth of field.
2–4: Supply line separates from paper, thickens, rounds into copper cylinder; fittings follow. Physical copper and distinct PVC. No holograms/particles.
4–6: Main supply, branches, fittings, gravity drains, vents/supports assemble logically. Brief 50mm-style copper connection detail. No clipping.
6–9: Framing, floor, walls, tile and fixtures progressively form around matching penetrations. Vanity, sinks, shower, tub and toilet follow plan. Concealed table-to-floor camera transition. Studio light yields gradually to bathroom light.
9–10.5: Finish in believable stone/walnut bathroom. Natural faucet stream and subtle basin contact. No exaggerated splashing.
10.5–12: Camera locks. Final frame becomes homepage hero. HTML headline: THE SOLID CHOICE FOR PROFESSIONAL PLUMBING. Phone/services CTAs remain accessible HTML.

## Production method
Blender, Unreal or professional architectural rendering. Establish real dimensions and corresponding blueprint coordinates before modeling plumbing. Place fixtures/connections first; derive routes with proper spacing, plausible fittings, drainage slope and clearances. Qualified plumbing reviewer checks routing/material transitions. Deliberate eased formation/masked surface reveals. PBR paper, copper, PVC, brass, chrome, ceramic, stone, wood, glass and water. Roughness variation, soft global illumination, consistent grading. No flying pieces, spinning objects, neon or frontend construction animation.

## Desktop
1920x1080 minimum; 24/30 fps; 10–12 seconds. Fast-start H.264 MP4; optional WebM. Target under 6 MB if quality permits. Export exact final decoded frame as desktop-final.webp, identical grade/aspect/framing. Match video/still object positioning. No cut/black flash.

## Mobile
Separate portrait 1080x1920 or 720x1280 composition. Protect headline/navigation safe areas; maintain drawing, copper, network, room and faucet visibility. Exact exported mobile-final.webp. Never label a desktop crop as separately produced mobile film. Target under 3 MB subject to quality.

## Audio
Muted default. Quiet studio/paper, subtle fitting clicks, restrained musical rise, gentle assembly, natural water, soft resolution. No loud impacts. Use licensed mix with controlled peaks.

## Runtime
Upload approved assets to dist/assets. Update dist/media.json:
desktop: /assets/blueprint-desktop.mp4
mobile: /assets/blueprint-mobile.mp4
poster: /assets/desktop-final.webp
mobilePoster: /assets/mobile-final.webp
duration: 12
Null mobile video keeps mobile static.

BlueprintCinematicEntrance in dist/app.js supports loading, ready, playing, transitioning, completed, skipped, fallback. Handles load timeout, autoplay rejection, errors, end, skip, scroll dismissal, muted audio toggle and session memory. Reduced motion stays static. Header/phone remain accessible above film layer; HTML content is initially crawlable.

## Acceptance
Test actual desktop/mobile video, exact last-frame blend, no layout shift/black flash, skip, repeat visits, reduced motion, sound, slow/offline media, autoplay rejection and scroll dismissal. Test Chromium/Safari/Firefox and actual phone browsers. Mark film complete only after real assets pass.


## Integration revision
Player now uses live hero bounds rather than a fixed header offset, exposes replay only when media is configured, and does not mark fallback as watched. No MP4/WebM was rendered. All actual-footage acceptance tests remain pending.
