export default function NotFoundPage() {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: 'url("/img/pexels-mac-destroir-2662816.jpg")' }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Page not found
            </h1>
            <p
              className="mb-5 "
              style={{ fontSize: "15px", textTransform: "uppercase" }}
            >
              Sorry but the page has not been found
            </p>
            <a href="/" className="btn btn-base-content">
              HOME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
