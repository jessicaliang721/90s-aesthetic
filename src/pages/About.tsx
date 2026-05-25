import { AboutSection } from "../components/AboutSection";
import { BulletList } from "../components/BulletList";
import { YTSection } from "../components/YTSection";

export default function About() {
  return (
    <main className="px-6 py-12">
      {/* ── About Section ─────────────────────────────────── */}
      <AboutSection
        bioText={
          <>
            <p className="font-mono text-ink leading-relaxed">
              I’m a <span className="highlight-pink">Senior Frontend Engineer</span> with 10+ years of experience building thoughtful, polished experiences for the web. I’m a self-taught developer who got my start building customer websites before spending the last 8 years creating large-scale enterprise applications. Over the years, I’ve developed both a strong technical foundation and a sharp eye for detail — bringing designs to life with care and a focus on creating high-quality user experiences.
            </p>
            <p className="font-mono text-ink leading-relaxed">
              When I’m not coding, I’m usually taking care of my three little boys or diving into one (or several!) of my many hobbies. Here’s a small glimpse of the things I’m frequently dabbling in:
            </p>
          </>
        }
        bulletList={
          <BulletList
            items={[
              'Reading',
              'Journaling',
              'Crocheting',
              'Gaming',
              'Embroidering',
              'Cross-stitching',
              'Coloring',
              'Sculpting']}
            borderColor="#D4B3FF"
          />
        }
      />
      {/* ── YouTube Section ─────────────────────────────────── */}
      <YTSection />
    </main>
  )
}
