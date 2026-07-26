// Discord Webhook Service for Form Submissions

export interface InquiryFormData {
  name: string
  discordTag: string
  email: string
  plan: string
  notes: string
}

export async function sendDiscordWebhook(data: InquiryFormData): Promise<boolean> {
  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL

  if (!webhookUrl || webhookUrl.includes("YOUR_WEBHOOK_ID")) {
    console.warn(
      "⚠️ VITE_DISCORD_WEBHOOK_URL is not set in .env. Form submission simulated locally."
    )
    return true
  }

  const payload = {
    username: "AXIOM Solutions Bot",
    avatar_url: "https://axiomsolution.site/favicon.svg",
    embeds: [
      {
        title: "📥 New Server Order Inquiry",
        description: `A new customer submitted a server inquiry on **AXIOM SOLUTIONS**.`,
        color: 2278750, // Primary Green color (0x22C55E)
        fields: [
          {
            name: "👤 Customer Name",
            value: data.name || "N/A",
            inline: true,
          },
          {
            name: "💬 Discord Tag",
            value: data.discordTag ? `\`${data.discordTag}\`` : "N/A",
            inline: true,
          },
          {
            name: "📧 Email",
            value: data.email ? `\`${data.email}\`` : "N/A",
            inline: true,
          },
          {
            name: "📦 Selected Server Plan",
            value: `**${data.plan}**`,
            inline: false,
          },
          {
            name: "📝 Custom Notes / Requirements",
            value: data.notes ? `\`\`\`${data.notes}\`\`\`` : "*None specified*",
            inline: false,
          },
        ],
        footer: {
          text: "AXIOM SOLUTIONS • Order Inquiry System",
        },
        timestamp: new Date().toISOString(),
      },
    ],
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      console.error(`Discord Webhook HTTP Error: ${response.status} ${response.statusText}`)
      return false
    }

    return true
  } catch (error) {
    console.error("Failed to send Discord Webhook:", error)
    return false
  }
}
