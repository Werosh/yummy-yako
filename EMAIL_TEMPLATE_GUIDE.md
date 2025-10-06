# EmailJS Template Guide for Yummy Yako Forms

## Overview

This guide explains how the universal EmailJS template works with all three forms on the Yummy Yako website:

1. **Events Form** (`event_booking`) - Event booking inquiries
2. **Contact Form** (`contact_order`) - Order requests and general inquiries
3. **Career Form** (`career_application`) - Job applications with file metadata

## Template Compatibility

The email template is designed to work seamlessly with all three forms using dynamic content based on the `{{form_type}}` variable.

### Form Type Identification

Each form sends a different `form_type` value:

- Events Form: `event_booking`
- Contact Form: `contact_order`
- Career Form: `career_application`

## Template Variables by Form

### Common Variables (All Forms)

| Variable              | Description                 | Example                                                |
| --------------------- | --------------------------- | ------------------------------------------------------ |
| `{{form_type}}`       | Type of form submitted      | `event_booking`, `contact_order`, `career_application` |
| `{{from_name}}`       | Submitter's full name       | `John Doe`                                             |
| `{{from_email}}`      | Submitter's email address   | `john@example.com`                                     |
| `{{phone}}`           | Submitter's phone number    | `+1234567890`                                          |
| `{{subject}}`         | Dynamic subject line        | `Event Booking Request from John Doe`                  |
| `{{message}}`         | Formatted form data         | Detailed form content                                  |
| `{{submission_date}}` | Date and time of submission | `12/25/2024, 2:30:45 PM`                               |

### Events Form Specific Variables

| Variable                      | Description             | Example                      |
| ----------------------------- | ----------------------- | ---------------------------- |
| `{{event_type}}`              | Type of event           | `Wedding`, `Corporate Event` |
| `{{event_date}}`              | Event date              | `2024-12-31`                 |
| `{{event_location}}`          | Event location          | `Central Park, NYC`          |
| `{{guest_count}}`             | Number of guests        | `150`                        |
| `{{item_count}}`              | Number of items         | `300`                        |
| `{{dietary_requirements}}`    | Dietary restrictions    | `Vegetarian options needed`  |
| `{{additional_requirements}}` | Additional requirements | `Setup at 2 PM`              |

### Contact Form Specific Variables

| Variable               | Description             | Example                                   |
| ---------------------- | ----------------------- | ----------------------------------------- |
| `{{order_type}}`       | Type of order           | `Delivery`, `Pickup`, `Event Catering`    |
| `{{items}}`            | Selected menu items     | `Nutella Knafeh Fried Ice Cream - $14.00` |
| `{{special_requests}}` | Special requests        | `No nuts please`                          |
| `{{preferred_date}}`   | Preferred delivery date | `2024-12-25`                              |
| `{{preferred_time}}`   | Preferred delivery time | `14:30`                                   |

### Career Form Specific Variables

| Variable               | Description      | Example                     |
| ---------------------- | ---------------- | --------------------------- |
| `{{availability}}`     | Available days   | `Monday, Wednesday, Friday` |
| `{{resume_file}}`      | Resume file name | `john_doe_resume.pdf`       |
| `{{resume_file_size}}` | File size in MB  | `2.5 MB`                    |
| `{{resume_file_type}}` | File MIME type   | `application/pdf`           |

## Email Template Features

### 1. Dynamic Header

The email header automatically shows the form type and subject:

```html
<h1>🍰 Yummy Yako</h1>
<p>New {{form_type}} Submission</p>
<p>{{subject}}</p>
```

### 2. Formatted Content

All form data is presented in a clean, readable format using the `{{message}}` variable, which contains:

- Form-specific details
- Contact information
- Proper formatting with bullet points

### 3. File Information (Career Form Only)

For career applications, the template includes a special section with file metadata:

```html
{{#if resume_file}} 📎 Resume File Information File Name: {{resume_file}} File
Size: {{resume_file_size}} File Type: {{resume_file_type}} {{/if}}
```

### 4. Contact Actions

Every email includes quick action buttons:

- 📧 Reply to Customer (pre-filled subject)
- 📞 Call Customer (direct phone link)

## File Upload Handling

### Important Note About File Attachments

EmailJS has limitations with file attachments, especially on the free plan. The current implementation:

✅ **What Works:**

- File metadata (name, size, type) is included in the email
- Form submission works reliably
- All form data is captured and sent

⚠️ **Limitations:**

- Actual file attachments may not be delivered via EmailJS
- File size limits apply (typically 10MB)

### Recommended Solutions for Resume Files:

1. **Current Approach (Recommended):**

   - Collect file metadata in the email
   - Include instructions for applicants to email resumes separately
   - Add note in career form: "We'll contact you to request your resume"

2. **Alternative Approaches:**
   - Use a file upload service (Google Drive, Dropbox)
   - Implement a separate file upload endpoint
   - Use EmailJS paid plans with attachment support

## Template Setup Instructions

### 1. Copy Template Content

Use either:

- `emailjs-template-sample.html` (HTML format with styling)
- `emailjs-template-simple.txt` (Plain text format)

### 2. EmailJS Template Configuration

1. Go to your EmailJS dashboard
2. Navigate to Email Templates
3. Edit your template (ID: `template_9pzkrq7`)
4. Paste the template content
5. Save the template

### 3. Test All Forms

Test each form to ensure:

- ✅ Events form sends event booking details
- ✅ Contact form sends order information
- ✅ Career form sends application with file metadata

## Troubleshooting

### Common Issues

1. **Template variables not displaying:**

   - Ensure variable names match exactly (case-sensitive)
   - Check that the template is saved in EmailJS

2. **File information not showing:**

   - Verify the `{{#if resume_file}}` conditional is working
   - Check that file data is being passed correctly

3. **Form-specific data missing:**
   - Verify the `form_type` is being set correctly
   - Check the `createEmailParams` function in `src/config/emailjs.js`

### Testing Checklist

- [ ] Events form sends with all event details
- [ ] Contact form sends with order information
- [ ] Career form sends with file metadata
- [ ] All emails include proper contact information
- [ ] Subject lines are dynamic and descriptive
- [ ] Email formatting is clean and professional

## Support

For issues with:

- **EmailJS**: Check [EmailJS Documentation](https://www.emailjs.com/docs/)
- **Template formatting**: Verify variable syntax and conditional statements
- **Form data**: Check browser console for JavaScript errors
