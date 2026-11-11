"use client";

import { useEffect, useState } from "react";
import GlyphPortal from "@/components/ui/glyph-portal";

const settings = { word: "Bumi Gora", scrollLength: 2.6, interactive: true, annotations: false };
const family = '"Glyph Portal Jakarta", Arial, sans-serif';
let fontLoad: Promise<void> | undefined;

export default function Demo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props };
  const [face, setFace] = useState<string | null>(null);
  useEffect(() => {
    let settled = false;
    const finish = (value: string) => { if (!settled) { settled = true; setFace(value); } };
    fontLoad ??= new FontFace("Glyph Portal Jakarta", 'url("https://cdn.21st.dev/assets/mirror/15/153fc85b70298beeb1d61a5f723331649e7f23bb77302a66e61cb3e2fbdb5e79.woff2")', { weight: "400 700" })
      .load().then((font) => { document.fonts.add(font); });
    const timeout = window.setTimeout(() => finish("Arial, sans-serif"), 1600);
    void fontLoad.then(() => finish(family), () => finish("Arial, sans-serif"));
    return () => { settled = true; clearTimeout(timeout); };
  }, []);

  return (
    <div data-demo-scroll data-slipstream-demo tabIndex={0} role="region" aria-label="Nusa Tenggara Barat. Gulir untuk masuk ke dalam."
      style={{ width: "100%", background: "#fff", containerType: "inline-size", fontFamily: face ?? "Arial, sans-serif" }}>
      <style>{`
        [data-slipstream-demo] [data-gp-caption]{inset:calc(var(--gp-word-bottom,50%) + 82px) 24px auto;justify-content:center;}
        [data-slipstream-demo] [data-gp-hint]{display:none;}
        [data-slipstream-demo] [data-gp-enter]{min-height:46px;padding:0 22px;gap:20px;background:#142b22;border:1px solid #10261d;border-radius:10px;color:#fff;font-size:13px;font-weight:500;box-shadow:0 1px 2px #10261d1a;transition:background .18s,box-shadow .18s;cursor:pointer;}
        [data-slipstream-demo] [data-gp-enter]:hover{background:#204434;box-shadow:0 3px 8px #10261d18;}
        [data-slipstream-demo] [data-gp-enter]:focus-visible{outline:2px solid #176247;outline-offset:4px;}
        [data-slipstream-demo] [data-gp-touch-picker]{top:auto;bottom:18px;left:50%;}
        [data-slipstream-demo] [data-gp-select]{border-color:transparent;border-radius:8px;font-size:12px;color:#626964;}
        [data-sublime-header]{position:absolute;inset:clamp(20px,4cqw,40px) clamp(24px,5cqw,64px) auto;display:flex;align-items:center;justify-content:space-between;gap:20px;}
        [data-sublime-logo]{font-size:19px;font-weight:700;letter-spacing:-.05em;color:#18251e;}
        [data-sublime-category]{font-size:12px;line-height:1.5;color:#71766f;font-weight:500;}
        [data-sublime-eyebrow]{position:absolute;inset:auto 24px calc(100% - var(--gp-word-top,35%) + 28px);margin:0;text-align:center;font-size:13px;font-weight:600;line-height:1.5;letter-spacing:.04em;text-transform:uppercase;color:#204434;}
        [data-sublime-support]{position:absolute;inset:calc(var(--gp-word-bottom,50%) + 28px) 24px auto;margin:0;text-align:center;font-size:15px;font-weight:400;line-height:1.5;color:#5a625d;max-width:560px;left:50%;transform:translateX(-50%);width:calc(100% - 48px);}
        [data-sublime-scroll]{position:absolute;inset:auto 24px 6%;text-align:center;color:#7c817b;font-size:11px;letter-spacing:.02em;}
        @media(any-pointer:coarse){[data-sublime-scroll]{bottom:12%;}}
        @container(max-width:450px){[data-sublime-category]{max-width:14ch;text-align:right;}[data-sublime-eyebrow]{font-size:11px;}[data-sublime-support]{font-size:13px;}[data-slipstream-demo] [data-gp-caption]{top:calc(var(--gp-word-bottom,50%) + 76px);}}
        @container(max-height:479px){[data-sublime-header]{top:16px;}[data-sublime-support]{top:calc(var(--gp-word-bottom,50%) + 14px);}[data-slipstream-demo] [data-gp-caption]{top:calc(var(--gp-word-bottom,50%) + 56px);}[data-sublime-scroll]{display:none;}}
        [data-slipstream-demo] [data-gp-content]{padding:5.5rem clamp(1.25rem,5cqw,5rem) 6.5rem;font-family:inherit;}
        [data-slipstream-demo] section,[data-slipstream-demo] [data-gp-caption]{font-family:inherit;}
        [data-slipstream-copy]{display:flex;width:min(100%,80rem);margin:auto;flex-direction:column;align-items:flex-start;gap:clamp(2rem,5svh,3.5rem);}
        [data-slipstream-copy] h2{max-width:48rem;margin:0;color:inherit;font-size:clamp(1.75rem,1.1rem + 2.1cqw,2.4rem);font-weight:400;line-height:1.25;letter-spacing:-.02em;text-wrap:balance;}
        [data-slipstream-features]{display:grid;width:100%;grid-template-columns:1fr;gap:1.75rem;}
        [data-slipstream-feature]{border-top:1px solid rgba(251,251,250,.22);padding-top:1.1rem;}
        [data-slipstream-feature] h3{margin:0;color:inherit;font-size:1.125rem;font-weight:600;line-height:1.25;letter-spacing:0;}
        [data-slipstream-feature] p{margin:.55rem 0 0;color:rgba(251,251,250,.85);font-size:.9375rem;line-height:1.55;}
        [data-slipstream-no]{display:inline-block;margin-right:.7rem;color:rgba(251,251,250,.85);font:600 .75rem ui-monospace,monospace;letter-spacing:.08em;transform:translateY(-.1em);}
        @container(min-width:768px){[data-slipstream-features]{grid-template-columns:repeat(3,minmax(0,1fr));gap:3.5rem;}}
      `}</style>
      {face ? (
        <GlyphPortal
          word={s.word}
          fontFamily={face}
          fontWeight={700}
          style={{ fontFamily: face }}
          scrollLength={s.scrollLength}
          interactive={s.interactive}
          annotations={s.annotations}
          front={
            <>
              <div data-sublime-header>
                <span data-sublime-logo>NTB SATU.</span>
                <span data-sublime-category>Lombok &amp; Sumbawa • Bumi Sasambo</span>
              </div>
              <p data-sublime-eyebrow>Bukan Hanya Lombok Ada Sumbawa Menanti</p>
              <p data-sublime-support>Dua pulau megah, kekayaan kaldera dunia, serta keharmonisan tiga suku bersaudara: Sasak, Samawa, dan Mbojo.</p>
              <span data-sublime-scroll> Scroll untuk melangkah ke dalam</span>
            </>
          }
        >
          <div data-slipstream-copy>
            <h2>Melampaui Batas Lombok: Menjelajahi Jiwa Bumi Sasambo.</h2>
            <div data-slipstream-features>
              <div data-slipstream-feature>
                <h3><span data-slipstream-no>01</span>Pulau Lombok (Sasak)</h3>
                <p>Puncak Rinjani 3.726 mdpl dengan Danau Kawah Segara Anak, pesisir sirkuit Mandalika, kepulauan bebas polusi Gili Tramena, serta desa tenun songket Sade.</p>
              </div>
              <div data-slipstream-feature>
                <h3><span data-slipstream-no>02</span>Pulau Sumbawa (Samawa &amp; Mbojo)</h3>
                <p>Kaldera megah Tambora Geopark UNESCO yang letusannya mengguncang iklim bumi pada 1815, suaka ramah Hiu Paus Teluk Saleh, eksotisme Pulau Moyo, dan Istana Kayu Dalam Loka.</p>
              </div>
              <div data-slipstream-feature>
                <h3><span data-slipstream-no>03</span>Kearifan Luhur Sasambo</h3>
                <p>Persatuan tiga entitas budaya: Sasak di Lombok, Samawa di barat Sumbawa, dan Mbojo di Bima-Dompu, diikat tradisi gotong royong dan kesenian ketangkasan.</p>
              </div>
            </div>
          </div>
        </GlyphPortal>
      ) : (
        <div role="status" style={{ height: "100vh", display: "grid", placeItems: "center", color: "#555", fontSize: 13 }}>
          Memuat tipografi Nusa Tenggara Barat…
        </div>
      )}
    </div>
  );
}
