import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const IMAGE_ROOT = path.resolve(process.cwd(), "image");

const CONTENT_TYPES: Record<string, string> = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp"
};

type RouteContext = {
  params: Promise<{
    path: string[];
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { path: filePathParts } = await context.params;
  const safePath = filePathParts.join(path.sep);
  const resolvedPath = path.resolve(IMAGE_ROOT, safePath);
  const imageRootWithSeparator = `${IMAGE_ROOT}${path.sep}`;

  if (!resolvedPath.startsWith(imageRootWithSeparator)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const extension = path.extname(resolvedPath).toLowerCase();
  const contentType = CONTENT_TYPES[extension];

  if (!contentType) {
    return new NextResponse("Unsupported file type", { status: 415 });
  }

  try {
    const fileStats = await stat(resolvedPath);

    if (!fileStats.isFile()) {
      return new NextResponse("Not found", { status: 404 });
    }

    const file = await readFile(resolvedPath);

    return new NextResponse(new Uint8Array(file), {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Type": contentType
      }
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
