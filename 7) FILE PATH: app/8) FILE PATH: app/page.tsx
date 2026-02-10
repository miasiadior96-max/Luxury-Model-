export default function HomePage() {
  return (
    <main>
      <nav className="w-full px-6 py-4 border-b border-neutral-200 flex justify-between items-center bg-white">
        <strong className="text-lg font-serif">Model Portfolio</strong>
        <ul className="flex gap-6 text-sm">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="text-center">
        <h1 className="text-4xl font-serif mb-2">Your Name</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Luxury beauty model with polished glam and strong close-up presence for premium campaigns, print, and digital. Based in NYC.
        </p>
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <a href="#portfolio" className="btn">View Portfolio</a>
          <a href="mailto:your@email.com" className="btn btn-outline">Request Comp Card</a>
          <a href="#contact" className="btn">Inquire</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] bg-neutral-200 animate-pulse" />
          ))}
        </div>
      </section>

      <section id="portfolio" className="text-center">
        <h2 className="text-3xl font-serif mb-4">Portfolio</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Curated work across beauty, lifestyle, e-comm, and editorial—organized by lane for quick casting review.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] bg-neutral-200 animate-pulse" />
          ))}
        </div>
      </section>

      <section id="about" className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif mb-4">About</h2>
        <p className="mb-6">
          I’m a beauty and luxury model with a polished glam lane—confident on camera, clean in movement, and consistent in close-up work.
          My look reads premium across skincare, fragrance, hair, and lifestyle. Based in NYC, available for travel and bookings nationwide.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left justify-center">
          <div><p className="text-sm uppercase text-neutral-500">Height</p><p>5'9\"</p></div>
          <div><p className="text-sm uppercase text-neutral-500">Bust</p><p>34</p></div>
          <div><p className="text-sm uppercase text-neutral-500">Waist</p><p>24</p></div>
          <div><p className="text-sm uppercase text-neutral-500">Hips</p><p>35</p></div>
          <div><p className="text-sm uppercase text-neutral-500">Shoe</p><p>8</p></div>
          <div><p className="text-sm uppercase text-neutral-500">Hair</p><p>Dark Brown</p></div>
          <div><p className="text-sm uppercase text-neutral-500">Eyes</p><p>Green</p></div>
          <div><p className="text-sm uppercase text-neutral-500">Base</p><p>NYC</p></div>
        </div>
      </section>

      <section id="contact" className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-4">Contact</h2>
        <p className="mb-6">For bookings, collaborations, and casting requests, please include project type, location, and timeframe.</p>
        <form className="grid gap-4 text-left">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="company" placeholder="Company" />
          <textarea name="message" placeholder="Message" rows={4} required />
          <button type="submit" className="btn" onClick={(e) => e.preventDefault()}>Send Inquiry</button>
        </form>
      </section>

      <footer className="text-center text-sm text-neutral-500 py-10">
        <p>© {new Date().getFullYear()} Your Name</p>
        <p><a href="mailto:youremail@example.com">youremail@example.com</a></p>
      </footer>
    </main>
  );
}
