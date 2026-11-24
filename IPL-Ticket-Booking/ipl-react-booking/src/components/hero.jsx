function Hero() {
  return (
    <section className="hero">
      <h1>Experience the Excitement of IPL!</h1>

      <p>
        Book your tickets and enjoy your favourite
        cricket matches live in the stadium.
      </p>

      <button
        onClick={() =>
          document.getElementById("matches").scrollIntoView({
            behavior: "smooth"
          })
        }
      >
        Book Tickets
      </button>
    </section>
  );
}

export default Hero;