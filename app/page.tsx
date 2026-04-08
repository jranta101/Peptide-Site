const products = [
  { name: "Peptide Alpha", purity: ">98%", format: "Lyophilized vial", sku: "RC-101" },
  { name: "Peptide Beta", purity: ">99%", format: "Reference standard", sku: "RC-204" },
  { name: "Peptide Gamma", purity: ">98%", format: "Analytical sample", sku: "RC-318" },
];

const sections = [
  {
    title: "Research-focused",
    text: "Built for laboratories, analytical teams, and qualified investigators seeking clearly documented research materials.",
  },
  {
    title: "Quality documentation",
    text: "Certificate of Analysis access, batch references, storage guidance, and traceable lot information presented in a clean workflow.",
  },
  {
    title: "Clear compliance language",
    text: "Positioned as research materials only, with prominent notices and non-promotional scientific presentation.",
  },
];

const faqs = [
  {
    q: "Who can request access?",
    a: "This site is intended for qualified research organizations, laboratories, and institutional buyers, subject to internal review and applicable requirements.",
  },
  {
    q: "Are these materials for human or veterinary use?",
    a: "No. All materials shown on this website are labeled and presented strictly for laboratory research use only and not for human or veterinary use, consumption, injection, or therapeutic application.",
  },
  {
    q: "Is documentation available?",
    a: "Batch information, handling guidance, and supporting documentation may be provided upon request where applicable.",
  },
];

export default function HomePage() {
  return (
    <main className="site">
      <header className="topbar">
        <div>
          <div className="brand">Axiom Research Compounds</div>
          <div className="subbrand">Laboratory Materials &amp; Analytical References</div>
        </div>

        <nav className="nav">
          <a href="#catalog">Catalog</a>
          <a href="#quality">Quality</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Request Access</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <div className="pill">For laboratory research use only</div>
          <h1>Precision research materials for serious laboratory workflows.</h1>
          <p className="lead">
            A clean, modern research company website built to present catalog items,
            batch documentation, and institutional credibility without consumer wellness positioning.
          </p>

          <div className="actions">
            <a className="btn btn-light" href="#catalog">View Catalog</a>
            <a className="btn btn-dark" href="#contact">Request Access</a>
          </div>

          <p className="notice">
            Research use only. Not for human or veterinary use. Not for consumption,
            injection, or therapeutic application.
          </p>
        </div>

        <div className="hero-grid">
          <div className="card">
            <div className="muted">Batch Portal</div>
            <h3>Documentation, lot data, and handling guidance</h3>

            <div className="mini-grid">
              <div className="mini-card">
                <div className="muted small">Current lots</div>
                <div>18 active references</div>
              </div>

              <div className="mini-card">
                <div className="muted small">Access model</div>
                <div>Private inquiry review</div>
              </div>
            </div>
          </div>

          <div className="info-grid">
            {sections.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="section alt">
        <div className="section-head">
          <div>
            <div className="eyebrow">Catalog</div>
            <h2>Featured research materials</h2>
          </div>

          <p className="section-copy">
            Example catalog presentation only. Replace these placeholders with your
            internal SKU structure, research categories, and batch workflow.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div className="card product-card" key={product.sku}>
              <div className="muted small">{product.sku}</div>
              <h3>{product.name}</h3>

              <div className="stats">
                <div className="stat">
                  <span>Purity</span>
                  <strong>{product.purity}</strong>
                </div>

                <div className="stat">
                  <span>Format</span>
                  <strong>{product.format}</strong>
                </div>

                <div className="stat">
                  <span>Status</span>
                  <strong>Inquiry only</strong>
                </div>
              </div>

              <a className="btn btn-accent" href="#contact">
                Request Access
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="quality" className="section">
        <div className="two-col">
          <div>
            <div className="eyebrow">Quality &amp; Documentation</div>
            <h2>A presentation layer built for technical trust.</h2>
            <p className="lead left">
              Use this section to explain your analytical process, documentation standards,
              packaging controls, and how qualified buyers can request supporting records.
              Keep the tone scientific and operational rather than lifestyle-based.
            </p>
          </div>

          <div className="card">
            <h3>Suggested modules</h3>
            <ul className="list">
              <li>Batch-specific documentation upon request</li>
              <li>Lot number verification workflow</li>
              <li>Storage and handling guidance</li>
              <li>Institutional account review process</li>
              <li>Procurement contact intake</li>
              <li>Research-use-only terms language</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="section alt">
        <div className="two-col">
          <div>
            <div className="eyebrow">About</div>
            <h2>Position your brand like a serious research supplier.</h2>
          </div>

          <p className="lead left">
            Axiom Research Compounds is presented here as a sample brand focused on
            laboratory materials, analytical references, and documentation-forward
            service for qualified research buyers. This demo avoids consumer health
            claims and keeps the website structure oriented around procurement,
            records, and scientific presentation.
          </p>
        </div>
      </section>

      <section id="faq" className="section narrow">
        <div className="center">
          <div className="eyebrow">FAQ</div>
          <h2>Common questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div className="card" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="contact-wrap">
          <div>
            <div className="eyebrow">Request Access</div>
            <h2>Institutional inquiry only</h2>
            <p className="lead left">
              Access requests are reviewed selectively. Approved inquiries may receive
              current availability, batch information, and next-step procurement details.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xykbvonp"
            method="POST"
            className="contact-form"
          >
            <input
              type="text"
              name="organization"
              placeholder="Organization name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Work email"
              required
            />

            <input
              type="text"
              name="role"
              placeholder="Procurement or lab role"
              required
            />

            <select name="order_size" defaultValue="" required>
              <option value="" disabled>
                Estimated order size
              </option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="ongoing">Ongoing procurement</option>
            </select>

            <input
              type="text"
              name="contact_method"
              placeholder="Telegram, Signal, or preferred follow-up method"
            />

            <textarea
              name="message"
              placeholder="Tell us about your research needs"
              rows={5}
              required
            />

            <label className="checkbox-row">
              <input
                type="checkbox"
                name="research_only_acknowledgment"
                value="yes"
                required
              />
              <span>
                I understand these materials are presented for laboratory research use only.
              </span>
            </label>

            <input type="hidden" name="_subject" value="New Institutional Access Request" />
            <input type="hidden" name="_redirect" value="https://project-566hq.vercel.app/" />

            <button type="submit" className="btn btn-light">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        © 2026 Axiom Research Compounds. Research use only. Not for human or veterinary use.
      </footer>
    </main>
  );
}
