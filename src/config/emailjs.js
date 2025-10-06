// EmailJS Configuration
// Replace these with your actual EmailJS credentials
// You can also use environment variables:
// - VITE_EMAILJS_SERVICE_ID
// - VITE_EMAILJS_TEMPLATE_ID
// - VITE_EMAILJS_PUBLIC_KEY

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_pkfw4vp",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_9pzkrq7",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Gsd0JOQf7_QY4GttC",
};

// Universal EmailJS template parameters for all forms
export const createEmailParams = (formType, formData) => {
  // Sanitize function to clean template variables
  const sanitize = (value) => {
    if (!value) return "Not specified";
    return String(value).replace(/[{}]/g, "").trim();
  };

  const baseParams = {
    form_type: sanitize(formType),
    from_name: sanitize(formData.name || formData.fullName || "Unknown User"),
    from_email: sanitize(formData.email || "noemail@example.com"),
    phone: sanitize(
      formData.phone || formData.phoneNumber || "No phone provided"
    ),
    submission_date: sanitize(new Date().toLocaleString()),
  };

  // Add form-specific data
  switch (formType) {
    case "event_booking":
      return {
        ...baseParams,
        event_type: sanitize(formData.eventType),
        event_date: sanitize(formData.eventDate),
        event_location: sanitize(formData.eventLocation),
        guest_count: sanitize(formData.guestCount),
        item_count: sanitize(formData.itemCount),
        dietary_requirements: sanitize(formData.dietaryRequirements),
        additional_requirements: sanitize(formData.additionalRequirements),
        subject: sanitize(`Event Booking Request from ${baseParams.from_name}`),
        message: sanitize(
          `
Event Booking Details:
- Event Type: ${sanitize(formData.eventType)}
- Event Date: ${sanitize(formData.eventDate)}
- Location: ${sanitize(formData.eventLocation)}
- Guest Count: ${sanitize(formData.guestCount)}
- Item Count: ${sanitize(formData.itemCount)}
- Dietary Requirements: ${sanitize(formData.dietaryRequirements)}
- Additional Requirements: ${sanitize(formData.additionalRequirements)}

Contact Information:
- Name: ${baseParams.from_name}
- Email: ${baseParams.from_email}
- Phone: ${baseParams.phone}
        `.trim()
        ),
      };

    case "contact_order":
      return {
        ...baseParams,
        order_type: sanitize(formData.orderType),
        items: sanitize(formData.items),
        special_requests: sanitize(formData.specialRequests),
        preferred_date: sanitize(formData.preferredDate),
        preferred_time: sanitize(formData.preferredTime),
        subject: sanitize(`Order Request from ${baseParams.from_name}`),
        message: sanitize(
          `
Order Details:
- Order Type: ${sanitize(formData.orderType)}
- Items: ${sanitize(formData.items)}
- Special Requests: ${sanitize(formData.specialRequests)}
- Preferred Date: ${sanitize(formData.preferredDate)}
- Preferred Time: ${sanitize(formData.preferredTime)}
- Additional Message: ${sanitize(formData.message)}

Contact Information:
- Name: ${baseParams.from_name}
- Email: ${baseParams.from_email}
- Phone: ${baseParams.phone}
        `.trim()
        ),
      };

    case "career_application":
      return {
        ...baseParams,
        availability: sanitize(
          formData.availability
            ? formData.availability.join(", ")
            : "Not specified"
        ),
        subject: sanitize(`Job Application from ${baseParams.from_name}`),
        message: sanitize(
          `
Job Application Details:
- Available Days: ${sanitize(
            formData.availability
              ? formData.availability.join(", ")
              : "Not specified"
          )}
- Additional Information: ${sanitize(formData.message)}

Contact Information:
- Name: ${baseParams.from_name}
- Email: ${baseParams.from_email}
- Phone: ${baseParams.phone}

Note: Applicant will email resume separately to careers@yummyyako.com
        `.trim()
        ),
      };

    default:
      return {
        ...baseParams,
        subject: sanitize(`Form Submission from ${baseParams.from_name}`),
        message: sanitize("Form submission received."),
      };
  }
};
