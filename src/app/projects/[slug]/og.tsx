import { getProjectBySlug } from "@/actions/get-project";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/jpg";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getProjectBySlug(params.slug);

  const imagePath = post?.metadata.image;

  const image = await readFile(join(process.cwd(), "public", imagePath!));
  const imgSrc = Uint8Array.from(image).buffer;

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center bg-[#020311] text-center text-[#f0f2f6]">
        <div tw="flex flex-col items-center mt-9">
          <p tw="rounded-full border border-[#8e5ff1] bg-[#17162e] px-4 py-2 mb-3">
            {post?.metadata.tag}
          </p>
          <h1 tw="text-6xl font-bold mt-0">{post?.metadata.title}</h1>
        </div>

        {/* <img
          src={imgSrc}
          tw="absolute h-[420px] -bottom-6 border border-[#8e5ff1]/20 rounded-md"
          alt=""
        /> */}
      </div>
    ),
    {
      ...size,
    },
  );
}
