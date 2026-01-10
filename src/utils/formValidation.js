/**
 * Global Form Validation Utilities
 * Use these validators across all forms in the application
 */

/**
 * Validates an email address
 * @param {string} email - The email to validate
 * @returns {object} - { isValid: boolean, error: string }
 */
export const validateEmail = (email) => {
    if (!email || email.trim() === '') {
        return { isValid: false, error: 'Email is required' };
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        return { isValid: false, error: 'Please enter a valid email address' };
    }

    return { isValid: true, error: '' };
};

/**
 * Validates a mobile number
 * @param {string} phone - The phone number to validate
 * @returns {object} - { isValid: boolean, error: string }
 */
export const validatePhone = (phone) => {
    if (!phone || phone.trim() === '') {
        return { isValid: false, error: 'Mobile number is required' };
    }

    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');

    // Must have at least 10 digits
    if (digitsOnly.length < 10) {
        return { isValid: false, error: 'Mobile number must be at least 10 digits' };
    }

    // Must not exceed 15 digits (international format)
    if (digitsOnly.length > 15) {
        return { isValid: false, error: 'Mobile number cannot exceed 15 digits' };
    }

    return { isValid: true, error: '' };
};

/**
 * Validates a name field
 * @param {string} name - The name to validate
 * @param {number} minLength - Minimum length (default: 2)
 * @param {number} maxLength - Maximum length (default: 100)
 * @returns {object} - { isValid: boolean, error: string }
 */
export const validateName = (name, minLength = 2, maxLength = 100) => {
    if (!name || name.trim() === '') {
        return { isValid: false, error: 'Name is required' };
    }

    const trimmedName = name.trim();

    if (trimmedName.length < minLength) {
        return { isValid: false, error: `Name must be at least ${minLength} characters` };
    }

    if (trimmedName.length > maxLength) {
        return { isValid: false, error: `Name cannot exceed ${maxLength} characters` };
    }

    // Check if name contains only letters, spaces, hyphens, and apostrophes
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    if (!nameRegex.test(trimmedName)) {
        return { isValid: false, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' };
    }

    return { isValid: true, error: '' };
};

/**
 * Validates a message/textarea field
 * @param {string} message - The message to validate
 * @param {number} minLength - Minimum length (default: 10)
 * @param {number} maxLength - Maximum length (default: 1000)
 * @returns {object} - { isValid: boolean, error: string }
 */
export const validateMessage = (message, minLength = 10, maxLength = 1000) => {
    if (!message || message.trim() === '') {
        return { isValid: false, error: 'Message is required' };
    }

    const trimmedMessage = message.trim();

    if (trimmedMessage.length < minLength) {
        return { isValid: false, error: `Message must be at least ${minLength} characters` };
    }

    if (trimmedMessage.length > maxLength) {
        return { isValid: false, error: `Message cannot exceed ${maxLength} characters` };
    }

    return { isValid: true, error: '' };
};

/**
 * Validates an entire form
 * @param {object} formData - Object containing form fields
 * @param {object} validationRules - Object mapping field names to validator functions
 * @returns {object} - { isValid: boolean, errors: object }
 */
export const validateForm = (formData, validationRules) => {
    const errors = {};
    let isValid = true;

    Object.keys(validationRules).forEach((fieldName) => {
        const validator = validationRules[fieldName];
        const result = validator(formData[fieldName]);

        if (!result.isValid) {
            errors[fieldName] = result.error;
            isValid = false;
        }
    });

    return { isValid, errors };
};
