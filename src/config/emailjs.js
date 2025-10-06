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
        resume_file_size: formData.resumeFile
          ? `${(formData.resumeFile.size / 1024 / 1024).toFixed(2)} MB`
          : "N/A",
        resume_file_type: formData.resumeFile
          ? formData.resumeFile.type
          : "N/A",
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
- File Size: ${
          formData.resumeFile
            ? `${(formData.resumeFile.size / 1024 / 1024).toFixed(2)} MB`
            : "N/A"
        }
- File Type: ${formData.resumeFile ? formData.resumeFile.type : "N/A"}
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
