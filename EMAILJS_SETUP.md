# EmailJS Integration Setup Guide

This guide explains how to configure EmailJS for the Yummy Yako website forms.

## Overview

All three forms (Events, Contact, Career) now use EmailJS for sending emails:

- **Events Form**: Event booking inquiries
- **Contact Form**: Order requests and general inquiries
- **Career Form**: Job applications with file attachments

## Setup Instructions

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

### 2. Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use the following template content:

```html
Subject: {{subject}} Hello Yummy Yako Team, You have received a new
{{form_type}} form submission: {{message}} --- Form Type: {{form_type}}
Submitted by: {{from_name}} Email: {{from_email}} Phone: {{phone}} Date:
{{submission_date}} Best regards, Yummy Yako Website
```

4. Save the template and note your **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `user_abc123def456`)

### 5. Configure Environment Variables (Optional)

The EmailJS credentials are already configured in `src/config/emailjs.js` with your actual values:

- Service ID: `service_pkfw4vp`
- Template ID: `template_9pzkrq7`
- Public Key: `Gsd0JOQf7_QY4GttC`

If you prefer to use environment variables, create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=service_pkfw4vp
VITE_EMAILJS_TEMPLATE_ID=template_9pzkrq7
VITE_EMAILJS_PUBLIC_KEY=Gsd0JOQf7_QY4GttC
```

### 6. Configuration Complete ✅

Your EmailJS credentials are already configured and ready to use! The forms will now send emails using your EmailJS service.

## Template Variables

The universal template supports these variables:

### Common Variables (All Forms)

- `{{form_type}}` - Type of form (event_booking, contact_order, career_application)
- `{{from_name}}` - Submitter's name
- `{{from_email}}` - Submitter's email
- `{{phone}}` - Submitter's phone number
- `{{submission_date}}` - Date and time of submission
- `{{subject}}` - Dynamic subject line based on form type
- `{{message}}` - Formatted message with all form data

### Events Form Specific

- `{{event_type}}` - Type of event
- `{{event_date}}` - Event date
- `{{event_location}}` - Event location
- `{{guest_count}}` - Number of guests
- `{{item_count}}` - Number of items
- `{{dietary_requirements}}` - Dietary restrictions
- `{{additional_requirements}}` - Additional requirements

### Contact Form Specific

- `{{order_type}}` - Type of order (delivery, pickup, etc.)
- `{{items}}` - Selected menu items
- `{{special_requests}}` - Special requests
- `{{preferred_date}}` - Preferred delivery date
- `{{preferred_time}}` - Preferred delivery time

### Career Form Specific

- `{{availability}}` - Available days
- `{{resume_file}}` - Name of uploaded resume file

## Testing

1. Start your development server: `npm run dev`
2. Navigate to each form and submit test data
3. Check your email inbox for the submissions
4. Verify that all form data is correctly formatted in the emails

## Troubleshooting

### Common Issues

1. **Emails not sending**: Check your EmailJS credentials in the `.env` file
2. **Template variables not working**: Ensure your EmailJS template uses the correct variable names
3. **File attachments not working**: EmailJS free plan has limitations on file attachments. Consider upgrading or using a different approach for resume uploads.

### Debug Mode

To debug EmailJS issues, you can check the browser console for error messages. The forms include comprehensive error handling and will display user-friendly error messages.

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for all EmailJS credentials
- Consider upgrading to EmailJS paid plans for production use
- Implement rate limiting to prevent spam submissions

## Support

For EmailJS-specific issues, refer to the [EmailJS Documentation](https://www.emailjs.com/docs/).

For website-specific issues, check the console logs and form validation messages.
