"use server"

export interface ContactFormData {
  name: string
  phone: string
  poojaService?: string
  message: string
}

export async function sendWhatsAppMessage(formData: ContactFormData) {
  try {
    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      (formData.poojaService ? `*Puja Service:* ${formData.poojaService}\n` : '') +
      `*Message:*\n${formData.message}\n\n` +
      `_This message was sent from the contact form on Shri Trimbakeshwar website._`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // WhatsApp number (remove + and spaces)
    const whatsappNumber = "917888012103"
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    return {
      success: true,
      url: whatsappUrl,
      message: "Message prepared successfully"
    }
  } catch (error) {
    console.error("Error preparing WhatsApp message:", error)
    return {
      success: false,
      url: null,
      message: "Failed to prepare message. Please try again."
    }
  }
}

