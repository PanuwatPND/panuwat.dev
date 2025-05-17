import { NextResponse } from "next/server";

const mockItems = [
  { id: 1, title: "app/", image: "/icons/folder.png", type: "folder" },
  { id: 2, title: "app/page.tsx", image: "/icons/page-file.png", type: "page" },
  { id: 3, title: "app/layout.tsx", image: "/icons/layout-file.png", type: "layout" },
  { id: 4, title: "components/Navbar.tsx", image: "/icons/component.png", type: "component" },
  { id: 5, title: "styles/globals.css", image: "/icons/css-file.png", type: "style" },
  { id: 6, title: "next.config.js", image: "/icons/config-file.png", type: "config" },
];

export async function GET() {
  return NextResponse.json(mockItems);
}

export async function POST(req: Request) {
  const data = await req.json();
  const newItem = { ...data, id: Date.now() };
  mockItems.push(newItem);
  return NextResponse.json(newItem, { status: 201 });
}

export async function PUT(req: Request) {
  const data = await req.json();
  const index = mockItems.findIndex(item => item.id === data.id);
  if (index === -1) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
  mockItems[index] = { ...mockItems[index], ...data };
  return NextResponse.json(mockItems[index]);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  const index = mockItems.findIndex(item => item.id === id);
  if (index === -1) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
  const deleted = mockItems.splice(index, 1);
  return NextResponse.json(deleted[0]);
}