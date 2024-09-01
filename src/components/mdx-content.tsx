import { JSX } from "react";
import { highlight } from "sugar-high";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import getImageSize from "image-size";
import path from "path";

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function Img(props: any) {
  const newProps = { ...props };

  const isLocalImage = !props.src.startsWith("http");

  // If no dimensions are defined, let's find it!
  if (!props.width && !props.height && isLocalImage) {
    // Extract the file name and path. You may need to adjust this for your app.
    const fileName = props.src.replace("/images", ""); // e.g. file.png, or /subdir/file.png
    const filePath = path.join(process.cwd(), "public", "images", fileName);

    const dimensions = getImageSize(filePath);

    newProps.width = dimensions.width;
    newProps.height = dimensions.height;
  }

  /**
   * If you have a different basePath for your application (e.g. site.xyz/docs/),
   * you might want to hardcode that here so that you don't need to write it for
   * every image.
   */
  const basePath = "/";

  if (!props.src.startsWith(basePath) && isLocalImage) {
    newProps.src = `${basePath}${props.src}`;
  }
  return <Image {...newProps} />;
}

const components = {
  code: Code,
};

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps,
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
