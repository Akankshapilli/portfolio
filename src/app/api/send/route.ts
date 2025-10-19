// src/app/api/send/route.ts

import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

// Initialize Notion client with your API key
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

export async function POST(request: Request) {
  // Check if the database ID is set
  if (!databaseId) {
    console.error("Notion Database ID is not set in .env.local");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    // Create a new page in the Notion database
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        // These property names MUST match your Notion database.
        // They are case-sensitive.

        // "Name" is the Title property
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        // "Email" is the Email property
        Email: {
          email: email,
        },
        // "Message" is the Rich Text property
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });

    // Success!
    return NextResponse.json(
      { message: "Success! Entry added to Notion." },
      { status: 200 }
    );
  } catch (error) {
    // Log the full error to the server console
    console.error("Error writing to Notion:", error);
    return NextResponse.json(
      { error: "Error writing to Notion database." },
      { status: 500 }
    );
  }
}
