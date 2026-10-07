import * as React from "react"

type VideoFit = "cover" | "contain" | "fill"
type SoundControlPosition =
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"

type Props = {
    src?: string
    poster?: string
    loop?: boolean
    radius?: number
    objectFit?: VideoFit
    heroSelector?: string
    visibilityThreshold?: number
    showSoundControl?: boolean
    soundControlPosition?: SoundControlPosition
    soundControlInset?: number
    soundControlSize?: number
    soundControlFill?: string
    soundControlBlur?: number
    soundControlShadow?: number
    soundControlHoverScale?: number
    soundControlIconColor?: string
}

export default function HeroAutoplayVideo(props: Props = {}) {
    const src =
        props.src ||
        "/assets/7d307e90e0-MLWPbW1dUQawJLhhun3dBwpgJak.mp4"
    const loop = props.loop ?? true
    const radius = props.radius ?? 12
    const objectFit = props.objectFit || "cover"
    const heroSelector =
        props.heroSelector ||
        "section, [data-design-name='HeroHeaderSection'], [data-design-name='Section']"
    const visibilityThreshold = props.visibilityThreshold ?? 0.25

    const showSoundControl = props.showSoundControl ?? true
    const soundControlPosition = props.soundControlPosition || "bottom-right"
    const soundControlInset = props.soundControlInset ?? 16
    const soundControlSize = props.soundControlSize ?? 44
    const soundControlFill =
        props.soundControlFill || "rgba(255, 255, 255, 0.18)"
    const soundControlBlur = props.soundControlBlur ?? 18
    const soundControlShadow = props.soundControlShadow ?? 20
    const soundControlHoverScale = props.soundControlHoverScale ?? 1.06
    const soundControlIconColor =
        props.soundControlIconColor || "rgba(255, 255, 255, 0.96)"

    const videoRef = React.useRef<HTMLVideoElement | null>(null)
    const soundEnabledRef = React.useRef(false)
    const [soundEnabled, setSoundEnabled] = React.useState(false)
    const [, setIsPlaying] = React.useState(false)

    React.useEffect(() => {
        soundEnabledRef.current = soundEnabled
        const video = videoRef.current
        if (!video) return

        video.muted = !soundEnabled
        video.volume = soundEnabled ? 1 : 0
    }, [soundEnabled])

    React.useEffect(() => {
        const video = videoRef.current
        if (!video) return

        let hero: Element | null = video.closest(heroSelector)
        if (!hero) hero = video.parentElement
        if (!hero) return

        let heroIsVisible = false
        let mounted = true

        const syncVideo = () => {
            video.autoplay = true
            video.muted = !soundEnabledRef.current
            video.volume = soundEnabledRef.current ? 1 : 0
            video.playsInline = true
            video.loop = loop
        }

        const playVideo = () => {
            if (!mounted || !heroIsVisible) return
            syncVideo()

            window.requestAnimationFrame(() => {
                if (!mounted || !heroIsVisible) return

                video
                    .play()
                    .then(() => setIsPlaying(true))
                    .catch(() => {
                        video.muted = true
                        video.volume = 0
                        soundEnabledRef.current = false
                        setSoundEnabled(false)
                        setIsPlaying(false)
                    })
            })
        }

        const pauseVideo = () => {
            video.pause()
            setIsPlaying(false)
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                heroIsVisible = entry.isIntersecting
                if (heroIsVisible) playVideo()
                else pauseVideo()
            },
            { threshold: visibilityThreshold }
        )

        const handlePlay = () => setIsPlaying(true)
        const handlePause = () => setIsPlaying(false)

        video.addEventListener("play", handlePlay)
        video.addEventListener("pause", handlePause)
        video.addEventListener("ended", handlePause)
        observer.observe(hero)

        return () => {
            mounted = false
            observer.disconnect()
            video.removeEventListener("play", handlePlay)
            video.removeEventListener("pause", handlePause)
            video.removeEventListener("ended", handlePause)
            pauseVideo()
        }
    }, [heroSelector, loop, visibilityThreshold])

    const toggleSound = React.useCallback(() => {
        const video = videoRef.current
        const nextSoundEnabled = !soundEnabledRef.current

        soundEnabledRef.current = nextSoundEnabled
        setSoundEnabled(nextSoundEnabled)

        if (!video) return

        video.autoplay = true
        video.muted = !nextSoundEnabled
        video.volume = nextSoundEnabled ? 1 : 0
        video.playsInline = true
        video.loop = loop

        video
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {
                video.muted = true
                video.volume = 0
                soundEnabledRef.current = false
                setSoundEnabled(false)
                setIsPlaying(false)
            })
    }, [loop])

    const shellStyle = {
        "--sound-size": `${soundControlSize}px`,
        "--sound-inset": `${soundControlInset}px`,
        "--sound-fill": soundControlFill,
        "--sound-blur": `${soundControlBlur}px`,
        "--sound-shadow": soundControlShadow / 100,
        "--sound-hover-scale": soundControlHoverScale,
        "--sound-icon-color": soundControlIconColor,
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        borderRadius: radius,
        background: "transparent",
    } as React.CSSProperties

    return (
        <div style={shellStyle}>
            <video
                ref={videoRef}
                src={src}
                poster={props.poster}
                muted={!soundEnabled}
                autoPlay
                playsInline
                loop={loop}
                preload="auto"
                controls={false}
                style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit,
                    borderRadius: radius,
                    background: "transparent",
                }}
            />

            {showSoundControl && (
                <button
                    className="hero-video-sound-control"
                    type="button"
                    data-position={soundControlPosition}
                    data-sound={soundEnabled ? "on" : "off"}
                    aria-label={soundEnabled ? "Mute video" : "Unmute video"}
                    onClick={toggleSound}
                >
                    <svg
                        className="hero-video-sound-icon"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                    >
                        <g className="hero-video-sound-glyph">
                            <path
                                d="M4.8 9.1v5.8h3.45l4.95 4V5.1L8.25 9.1H4.8Z"
                                fill="currentColor"
                            />
                            {soundEnabled ? (
                                <>
                                    <path
                                        d="M15.4 8.2c1.05 1 1.65 2.35 1.65 3.8s-.6 2.8-1.65 3.8"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="1.8"
                                    />
                                    <path
                                        d="M17.9 5.8c1.75 1.65 2.7 3.85 2.7 6.2s-.95 4.55-2.7 6.2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="1.8"
                                    />
                                </>
                            ) : (
                                <>
                                    <path
                                        d="M15.9 9.9l4.2 4.2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="1.9"
                                    />
                                    <path
                                        d="M20.1 9.9l-4.2 4.2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="1.9"
                                    />
                                </>
                            )}
                        </g>
                    </svg>
                </button>
            )}

            <style>{`
                .hero-video-sound-control {
                    position: absolute;
                    z-index: 3;
                    width: var(--sound-size);
                    height: var(--sound-size);
                    border: 0;
                    border-radius: 999px;
                    background: var(--sound-fill);
                    color: var(--sound-icon-color);
                    backdrop-filter: blur(var(--sound-blur)) saturate(1.08);
                    -webkit-backdrop-filter: blur(var(--sound-blur)) saturate(1.08);
                    box-shadow:
                        0 14px 32px rgba(0, 0, 0, var(--sound-shadow)),
                        inset 0 1px 0 rgba(255, 255, 255, 0.18),
                        inset 0 -10px 20px rgba(0, 0, 0, 0.12);
                    cursor: pointer;
                    display: grid;
                    place-items: center;
                    padding: 0;
                    transform: translateZ(0);
                    transition: transform 180ms ease, background 180ms ease, opacity 180ms ease;
                }

                .hero-video-sound-control:hover {
                    transform: scale(var(--sound-hover-scale));
                }

                .hero-video-sound-control:active {
                    transform: scale(0.98);
                }

                .hero-video-sound-control[data-position="top-left"] {
                    top: var(--sound-inset);
                    left: var(--sound-inset);
                }

                .hero-video-sound-control[data-position="top-right"] {
                    top: var(--sound-inset);
                    right: var(--sound-inset);
                }

                .hero-video-sound-control[data-position="bottom-left"] {
                    bottom: var(--sound-inset);
                    left: var(--sound-inset);
                }

                .hero-video-sound-control[data-position="bottom-right"] {
                    right: var(--sound-inset);
                    bottom: var(--sound-inset);
                }

                .hero-video-sound-icon {
                    width: 54%;
                    height: 54%;
                    display: block;
                    overflow: visible;
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.24));
                }

                .hero-video-sound-glyph {
                    transform: translateX(-0.45px);
                    transform-origin: 12px 12px;
                }
            `}</style>
        </div>
    )
}
