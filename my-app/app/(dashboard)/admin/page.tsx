import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <div className="text-center">
        <div className="hero min-h-screen ">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source
              src="/img/production_id_4909397 (1080p).mp4"
              type="video/mp4"
            />
          </video>

          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1
                className="mb-5 text-5xl font-bold"
                style={{ fontSize: "50px", textTransform: "uppercase" }}
              >
                Welcome {session?.user.username}
              </h1>
              <p
                className="mb-5 "
                style={{ fontSize: "15px", textTransform: "uppercase" }}
              >
                Our main product are stainless steel vacuum mug, Travelling pot,
                Coffee pot and wated bottle.
              </p>
              <a href="/auth/product" className="btn btn-base-content">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <h2 className="text-center">Please login to see this admin page</h2>;
};
export default page;

// Welcome {session?.user.username}
