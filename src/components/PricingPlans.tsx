import { EditableCopy } from '../content/SiteContent';
import * as React from "react"

type Feature = { label: string; included?: boolean }
type Plan = {
    name?: string
    price: string
    label: string
    features: Feature[]
    bonus?: Feature[]
}

const serviceFeatures = [
    "Brand Digital Twin",
    "Future Research",
    "Brand City Canvas",
    "Experience Book",
    "Brand Integrator Brain",
]

const bonusFeatures = [
    "Story Teller",
    "Image Generator",
    "Video Generator",
    "Campaign Maker",
]

const agentFeatures = [
    "Story Teller",
    "Video Generator",
    "Image Generator",
    "Campaign Maker",
    "Secure Chat",
    "Detail Design",
    "Soul Print",
]

const factoryFeatures = [
    "Brand Mascot (Character Design)",
    "Brochure, Catalog (Up to 8 Pages)",
    "Poster",
    "Billboard and Banner",
    "Post and Story",
    "UI Design for App and Website (Up to 4 Slide)",
    "Logo Motion",
    "Short Video for Post and Story (up to 60 Sec)",
    "Long Video (per Each Minute)",
]

const plans: Record<string, Plan[]> = {
    services: [
        {
            name: "Basic",
            price: "$6,000",
            label: "Features",
            features: serviceFeatures.map((label) => ({
                label,
                included: false,
            })),
            bonus: bonusFeatures.slice(0, 2).map((label) => ({
                label,
                included: true,
            })),
        },
        {
            name: "Advanced",
            price: "$30,000",
            label: "Features",
            features: serviceFeatures.map((label, index) => ({
                label,
                included: index >= 2,
            })),
            bonus: bonusFeatures.map((label) => ({
                label,
                included: true,
            })),
        },
        {
            name: "Enterprise",
            price: "$55,000",
            label: "Features",
            features: serviceFeatures.map((label) => ({
                label,
                included: true,
            })),
            bonus: bonusFeatures.map((label) => ({
                label,
                included: true,
            })),
        },
    ],
    agents: [
        {
            name: "Starter",
            price: "$100",
            label: "Including",
            features: agentFeatures.map((label) => ({
                label,
                included: true,
            })),
        },
        {
            name: "Pro",
            price: "$500",
            label: "Including",
            features: agentFeatures.map((label) => ({
                label,
                included: true,
            })),
        },
        {
            name: "Premium",
            price: "$800",
            label: "Including",
            features: agentFeatures.map((label) => ({
                label,
                included: true,
            })),
        },
    ],
    factory: [
        {
            price: "$6,000",
            label: "Features",
            features: factoryFeatures.map((label) => ({
                label,
                included: true,
            })),
        },
    ],
}

interface Props {
    cardStart: string
    cardEnd: string
    textColor: string
    mutedColor: string
    radius: number
    style?: React.CSSProperties
}

const styles = [
    ".bextudio-pricing-responsive { width: 100%; height: auto; box-sizing: border-box; font-family: Inter Tight, Inter, Arial, sans-serif; background: var(--color-surface-soft); box-shadow: 0 0 0 100vmax var(--color-surface-soft); clip-path: inset(0 -100vmax); container-type: inline-size; container-name: bextudio-pricing; }",
    ".bextudio-pricing-layout { width: 100%; display: flex; flex-direction: column; align-items: center; gap: 48px; padding: 24px 0 56px; box-sizing: border-box; }",
    ".bextudio-pricing-tabs { width: 100%; max-width: 517px; height: 54px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; padding: 0 6px; border: 0; border-radius: 36px; background: transparent; box-sizing: border-box; }",
    ".bextudio-pricing-tab { min-width: 0; min-height: 42px; padding: 0 6px; border: 0; border-radius: 999px; background: rgba(255, 255, 255, 0.04); color: var(--pricing-text); font-family: Inter, Arial, sans-serif; font-size: 13px; font-weight: 400; line-height: 1.2; letter-spacing: 0; cursor: pointer; transition: background-color 160ms ease, box-shadow 160ms ease; }",
    ".bextudio-pricing-tab[data-active=true] { background: rgba(255, 255, 255, 0.89); box-shadow: 0 1px 8px rgba(0, 0, 0, 0.12), 0 1px 2px -1px rgba(0, 0, 0, 0.10); }",
    ".bextudio-pricing-tab:focus-visible { outline: 2px solid rgba(8, 145, 178, 0.75); outline-offset: 2px; }",
    ".bextudio-pricing-grid { width: 100%; display: grid; grid-template-columns: minmax(0, 1fr); gap: 16px; box-sizing: border-box; }",
    ".bextudio-pricing-card { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; min-width: 0; min-height: 0; gap: 24px; padding: 20px 16px; border: 0; border-radius: var(--pricing-radius-mobile); background: linear-gradient(113deg, var(--pricing-card-start) 0%, var(--pricing-card-end) 100%); box-shadow: 4px 5px 9px rgba(0, 0, 0, 0.05); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-sizing: border-box; overflow: hidden; }",
    ".bextudio-pricing-card::after { content: \"\"; position: absolute; inset: 0; border: 2px solid var(--color-surface); border-radius: inherit; pointer-events: none; }",
    ".bextudio-pricing-header { width: 100%; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 10px; }",
    ".bextudio-pricing-name, .bextudio-pricing-price, .bextudio-pricing-label { color: var(--pricing-muted); font-family: Inter Tight, Inter, Arial, sans-serif; font-size: 14px; font-weight: 500; line-height: 1.3; letter-spacing: 0; }",
    ".bextudio-pricing-name, .bextudio-pricing-price, .bextudio-pricing-label { margin: 0; }",
    ".bextudio-pricing-price { font-size: 36px; line-height: 1.1; overflow-wrap: anywhere; }",
    ".bextudio-pricing-cta { display: flex; align-items: center; justify-content: center; width: 100%; min-height: 40px; padding: 10px 20px; border-radius: 28px; background: var(--color-surface); color: var(--pricing-text); box-shadow: inset 2px 4px 16px rgba(248, 248, 248, 0.06); box-sizing: border-box; font-family: Inter Tight, Inter, Arial, sans-serif; font-size: 14px; font-weight: 500; line-height: 1.3; letter-spacing: 0; text-decoration: none; }",
    ".bextudio-pricing-group { width: 100%; display: flex; flex-direction: column; align-items: flex-start; gap: 14px; box-sizing: border-box; }",
    ".bextudio-pricing-group[data-service-group=true] { min-height: 180px; }",
    ".bextudio-pricing-group-secondary { padding-top: 12px; }",
    ".bextudio-pricing-features { width: 100%; display: flex; flex-direction: column; gap: 12px; margin: 0; padding: 0; list-style: none; }",
    ".bextudio-pricing-feature { width: 100%; display: grid; grid-template-columns: 14px minmax(0, 1fr); gap: 10px; align-items: start; color: var(--pricing-muted); font-family: Inter Tight, Inter, Arial, sans-serif; font-size: 14px; font-weight: 500; line-height: 1.35; letter-spacing: 0; }",
    ".bextudio-pricing-mark { width: 14px; height: 14px; margin-top: 2px; color: var(--pricing-muted); font-family: Inter, Arial, sans-serif; font-size: 14px; font-weight: 500; line-height: 14px; text-align: center; }",
    "@container bextudio-pricing (min-width: 700px) { .bextudio-pricing-layout { gap: 64px; padding: 32px 0 72px; } .bextudio-pricing-tabs { height: 60px; gap: 8px; padding: 0 8px; border-radius: 39px; } .bextudio-pricing-tab { min-height: 44px; padding: 0 7px; font-size: 15px; } .bextudio-pricing-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; } .bextudio-pricing-grid[data-single=true] { grid-template-columns: minmax(0, 1fr); max-width: 720px; } .bextudio-pricing-card { gap: 32px; padding: 24px 20px; border-radius: var(--pricing-radius-tablet); box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.05); } .bextudio-pricing-header { gap: 12px; } .bextudio-pricing-name, .bextudio-pricing-price, .bextudio-pricing-label { font-size: 15px; } .bextudio-pricing-price { font-size: 42px; } .bextudio-pricing-cta { min-height: 42px; padding: 11px 24px; border-radius: 30px; font-size: 15px; } .bextudio-pricing-group { gap: 16px; } .bextudio-pricing-group[data-service-group=true] { min-height: 208px; } .bextudio-pricing-group-secondary { padding-top: 16px; } .bextudio-pricing-features { gap: 16px; } .bextudio-pricing-feature { grid-template-columns: 15px minmax(0, 1fr); gap: 12px; font-size: 15px; line-height: 1.3; } .bextudio-pricing-mark { width: 15px; height: 15px; font-size: 15px; line-height: 15px; } }",
    "@container bextudio-pricing (min-width: 1000px) { .bextudio-pricing-layout { gap: 80px; padding: 40px 0 96px; } .bextudio-pricing-tabs { height: 66px; gap: 10px; padding: 0 10px; border-radius: 43px; } .bextudio-pricing-tab { min-height: 46px; padding: 0 8px; font-size: 16px; } .bextudio-pricing-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; } .bextudio-pricing-card { gap: 40px; padding: 30px 25px; border-radius: var(--pricing-radius); box-shadow: 5.59627px 6.99534px 11.1925px rgba(0, 0, 0, 0.05); } .bextudio-pricing-header { gap: 15px; } .bextudio-pricing-name, .bextudio-pricing-price, .bextudio-pricing-label { font-size: 16px; } .bextudio-pricing-price { font-size: 48px; } .bextudio-pricing-cta { min-height: 44.8px; padding: 12px 32px; border-radius: 32px; font-size: 16px; } .bextudio-pricing-group { gap: 20px; } .bextudio-pricing-group[data-service-group=true] { min-height: 232px; } .bextudio-pricing-group-secondary { padding-top: 20px; } .bextudio-pricing-features { gap: 20px; } .bextudio-pricing-feature { grid-template-columns: 16px minmax(0, 1fr); gap: 15px; font-size: 16px; line-height: 1.3; } .bextudio-pricing-mark { width: 16px; height: 16px; font-size: 16px; line-height: 16px; } }",
].join("\n")

function normalizeColor(value: string) {
    return value.toLowerCase().replaceAll(" ", "")
}

function resolveGradient(cardStart: string, cardEnd: string) {
    const start = normalizeColor(cardStart)
    const end = normalizeColor(cardEnd)
    const legacyStart = [
        "var(--color-surface-secondary)",
        "var(--color-surface-secondary)",
        "rgba(235,239,245,1)",
    ].includes(start)
    const legacyEnd = [
        "var(--color-surface)",
        "var(--color-surface)",
        "var(--color-surface)",
        "rgba(255,255,255,1)",
    ].includes(end)

    if (legacyStart && legacyEnd) {
        return ["rgba(34, 204, 238, 0.04)", "rgba(0, 0, 0, 0)"]
    }

    return [cardStart, cardEnd]
}

function FeatureGroup({
    label,
    features,
    mutedColor,
    serviceGroup,
    secondary = false,
}: {
    label: string
    features: Feature[]
    mutedColor: string
    serviceGroup: boolean
    secondary?: boolean
}) {
    return (
        <div
            className={
                "bextudio-pricing-group" +
                (secondary ? " bextudio-pricing-group-secondary" : "")
            }
            data-service-group={serviceGroup}
        >
            <p
                className="bextudio-pricing-label"
                style={{ color: mutedColor }}
            >
                {label}:
            </p>
            <ul className="bextudio-pricing-features">
                {features.map((feature) => (
                    <li
                        key={feature.label}
                        className="bextudio-pricing-feature"
                        style={{ color: mutedColor }}
                    >
                        <span
                            className="bextudio-pricing-mark"
                            aria-hidden={true}
                        >
                            {feature.included ? "\u2713" : "\u00d7"}
                        </span>
                        <span>{feature.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 */
export default function PricingResponsive({
    cardStart = "rgba(34, 204, 238, 0.04)",
    cardEnd = "rgba(0, 0, 0, 0)",
    textColor = "var(--color-text)",
    mutedColor = "var(--color-text-secondary)",
    radius = 20,
    style,
}: Props) {
    const [active, setActive] = React.useState("services")
    const id = React.useId()
    const tabs = [
        { id: "services", label: "Services" },
        { id: "agents", label: "Agents" },
        { id: "factory", label: "Content factory" },
    ]
    const activePlans = plans[active]
    const [resolvedStart, resolvedEnd] = resolveGradient(cardStart, cardEnd)
    const resolvedRadius = radius === 8 ? 20 : radius
    const cssVars = {
        ...style,
        "--pricing-card-start": resolvedStart,
        "--pricing-card-end": resolvedEnd,
        "--pricing-text": textColor,
        "--pricing-muted": mutedColor,
        "--pricing-radius": resolvedRadius + "px",
        "--pricing-radius-tablet": Math.max(0, resolvedRadius * 0.9) + "px",
        "--pricing-radius-mobile": Math.max(0, resolvedRadius * 0.8) + "px",
    } as React.CSSProperties

    return (
        <section
            className="bextudio-pricing-responsive"
            style={cssVars}
        >
            <style>{styles}</style>
            <div className="bextudio-pricing-layout">
                <div
                className="bextudio-pricing-tabs"
                role="tablist"
                aria-label="Pricing categories"
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        id={id + "-" + tab.id + "-tab"}
                        type="button"
                        role="tab"
                        aria-selected={active === tab.id}
                        aria-controls={id + "-" + tab.id + "-panel"}
                        data-active={active === tab.id}
                        className="bextudio-pricing-tab"
                        onClick={() => setActive(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div
                id={id + "-" + active + "-panel"}
                className="bextudio-pricing-grid"
                role="tabpanel"
                aria-labelledby={id + "-" + active + "-tab"}
                data-single={activePlans.length === 1}
            >
                {activePlans.map((plan) => (
                    <article
                        key={(plan.name || "factory") + plan.price}
                        className="bextudio-pricing-card"
                    >
                        <div className="bextudio-pricing-header">
                            {plan.name && (
                                <h3
                                    className="bextudio-pricing-name"
                                    style={{ color: mutedColor }}
                                >
                                    <EditableCopy id={active+"-"+(plan.name||"factory").toLowerCase().replace(/\s/g,"-")+"-name"} fallback={plan.name}>{plan.name}</EditableCopy>
                                </h3>
                            )}
                            <p
                                className="bextudio-pricing-price"
                                style={{ color: mutedColor }}
                            >
                                <EditableCopy id={active+"-"+(plan.name||"factory").toLowerCase().replace(/\s/g,"-")+"-price"} fallback={plan.price}>{plan.price}</EditableCopy>
                            </p>
                        </div>
                        <a
                            className="bextudio-pricing-cta"
                            href="/authentication"
                        >
                            Get Started
                        </a>
                        <FeatureGroup
                            label={plan.label}
                            features={plan.features}
                            mutedColor={mutedColor}
                            serviceGroup={active === "services"}
                        />
                        {plan.bonus && (
                            <FeatureGroup
                                label="Free for 1 Month"
                                features={plan.bonus}
                                mutedColor={mutedColor}
                                serviceGroup={true}
                                secondary={true}
                            />
                        )}
                    </article>
                ))}
                </div>
            </div>
        </section>
    )
}

PricingResponsive.displayName = "Pricing Responsive"
