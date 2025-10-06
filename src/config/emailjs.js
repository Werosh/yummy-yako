// EmailJS Configuration
// Replace these with your actual EmailJS credentials
// You can also use environment variables:
// - VITE_EMAILJS_SERVICE_ID
// - VITE_EMAILJS_TEMPLATE_ID
// - VITE_EMAILJS_PUBLIC_KEY

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id_here",
  TEMPLATE_ID:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id_here",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key_here",
};

// Universal EmailJS template parameters for all forms
export const createEmailParams = (formType, formData) => {
  const baseParams = {
    form_type: formType,
    from_name: formData.name || formData.fullName || "Unknown",
    from_email: formData.email || "No email provided",
    phone: formData.phone || formData.phoneNumber || "No phone provided",
    submission_date: new Date().toLocaleString(),
  };

  // Add form-specific data
  switch (formType) {
    case "event_booking":
      return {
        ...baseParams,
        event_type: formData.eventType || "Not specified",
        event_date: formData.eventDate || "Not specified",
        event_location: formData.eventLocation || "Not specified",
        guest_count: formData.guestCount || "Not specified",
        item_count: formData.itemCount || "Not specified",
        dietary_requirements: formData.dietaryRequirements || "None specified",
        additional_requirements:
          formData.additionalRequirements || "None specified",
        subject: `Event Booking Request from ${baseParams.from_name}`,
        message: `
Event Booking Details:
- Event Type: ${formData.eventType || "Not specified"}
- Event Date: ${formData.eventDate || "Not specified"}
- Location: ${formData.eventLocation || "Not specified"}
- Guest Count: ${formData.guestCount || "Not specified"}
- Item Count: ${formData.itemCount || "Not specified"}
- Dietary Requirements: ${formData.dietaryRequirements || "None specified"}
- Additional Requirements: ${
          formData.additionalRequirements || "None specified"
        }

Contact Information:
- Name: ${baseParams.from_name}
- Email: ${baseParams.from_email}
- Phone: ${baseParams.phone}
        `.trim(),
      };

    case "contact_order":
      return {
        ...baseParams,
        order_type: formData.orderType || "Not specified",
        items: formData.items || "Not specified",
        special_requests: formData.specialRequests || "None specified",
        preferred_date: formData.preferredDate || "Not specified",
        preferred_time: formData.preferredTime || "Not specified",
        subject: `Order Request from ${baseParams.from_name}`,
        message: `
Order Details:
- Order Type: ${formData.orderType || "Not specified"}
- Items: ${formData.items || "Not specified"}
- Special Requests: ${formData.specialRequests || "None specified"}
- Preferred Date: ${formData.preferredDate || "Not specified"}
- Preferred Time: ${formData.preferredTime || "Not specified"}
- Additional Message: ${formData.message || "None"}

Contact Information:
- Name: ${baseParams.from_name}
- Email: ${baseParams.from_email}
- Phone: ${baseParams.phone}
        `.trim(),
      };

    case "career_application":
      return {
        ...baseParams,
        availability: formData.availability
          ? formData.availability.join(", ")
          : "Not specified",
        resume_file: formData.resumeFile
          ? formData.resumeFile.name
          : "No file uploaded",
        subject: `Job Application from ${baseParams.from_name}`,
        message: `
Job Application Details:
- Available Days: ${
          formData.availability
            ? formData.availability.join(", ")
            : "Not specified"
        }
- Resume File: ${
          formData.resumeFile ? formData.resumeFile.name : "No file uploaded"
        }
- Additional Information: ${formData.message || "None"}

Contact Information:
- Name: ${baseParams.from_name}
- Email: ${baseParams.from_email}
- Phone: ${baseParams.phone}
        `.trim(),
      };

    default:
      return {
        ...baseParams,
        subject: `Form Submission from ${baseParams.from_name}`,
        message: "Form submission received.",
      };
  }
};
