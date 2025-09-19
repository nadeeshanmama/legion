// Tab functionality for applications page
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                btn.classList.add('active');
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // FAQ toggle functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                faqItem.classList.toggle('active');
                
                // Toggle icon
                const icon = question.querySelector('i');
                if (faqItem.classList.contains('active')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            });
        });
    }

    // Application form validation - General application form
    const applicationForm = document.getElementById('application-form');
    
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = applicationForm.querySelectorAll('[required]');
            
            // Check all required fields
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Show success message
                const successAlert = document.createElement('div');
                successAlert.className = 'alert success';
                successAlert.textContent = 'Application submitted successfully! We will contact you soon.';
                applicationForm.prepend(successAlert);
                
                // Reset form
                applicationForm.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successAlert.remove();
                }, 5000);
            } else {
                // Show error message
                const errorAlert = document.createElement('div');
                errorAlert.className = 'alert error';
                errorAlert.textContent = 'Please fill in all required fields.';
                applicationForm.prepend(errorAlert);
                
                // Remove error message after 5 seconds
                setTimeout(() => {
                    errorAlert.remove();
                }, 5000);
            }
        });
    }
    
    // Police Application Form
    const policeApplicationForm = document.getElementById('police-application-form');
    if (policeApplicationForm) {
        policeApplicationForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = policeApplicationForm.querySelectorAll('[required]');
            
            // Check all required fields
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                try {
                    // Send to Discord webhook if the function exists
                    let success = true;
                    if (window.DiscordWebhook && typeof window.DiscordWebhook.processFormSubmission === 'function') {
                        success = await window.DiscordWebhook.processFormSubmission(policeApplicationForm, 'police');
                    }
                    
                    // Show success message
                    const successAlert = document.createElement('div');
                    successAlert.className = 'alert success';
                    successAlert.textContent = 'Police application submitted successfully! We will contact you soon.';
                    policeApplicationForm.prepend(successAlert);
                    
                    // Reset form
                    policeApplicationForm.reset();
                    
                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successAlert.remove();
                    }, 5000);
                } catch (error) {
                    console.error("Error submitting police application:", error);
                    
                    // Show error message
                    const errorAlert = document.createElement('div');
                    errorAlert.className = 'alert error';
                    errorAlert.textContent = 'There was an error submitting your application. Please try again later.';
                    policeApplicationForm.prepend(errorAlert);
                    
                    // Remove error message after 5 seconds
                    setTimeout(() => {
                        errorAlert.remove();
                    }, 5000);
                }
            } else {
                // Show error message
                const errorAlert = document.createElement('div');
                errorAlert.className = 'alert error';
                errorAlert.textContent = 'Please fill in all required fields.';
                policeApplicationForm.prepend(errorAlert);
                
                // Remove error message after 5 seconds
                setTimeout(() => {
                    errorAlert.remove();
                }, 5000);
            }
        });
    }
    
    // Medical Application Form
    const medicalApplicationForm = document.getElementById('medical-application-form');
    if (medicalApplicationForm) {
        medicalApplicationForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = medicalApplicationForm.querySelectorAll('[required]');
            
            // Check all required fields
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                try {
                    // Send to Discord webhook if the function exists
                    let success = true;
                    if (window.DiscordWebhook && typeof window.DiscordWebhook.processFormSubmission === 'function') {
                        success = await window.DiscordWebhook.processFormSubmission(medicalApplicationForm, 'medical');
                    }
                    
                    // Show success message
                    const successAlert = document.createElement('div');
                    successAlert.className = 'alert success';
                    successAlert.textContent = 'Medical application submitted successfully! We will contact you soon.';
                    medicalApplicationForm.prepend(successAlert);
                    
                    // Reset form
                    medicalApplicationForm.reset();
                    
                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successAlert.remove();
                    }, 5000);
                } catch (error) {
                    console.error("Error submitting medical application:", error);
                    
                    // Show error message
                    const errorAlert = document.createElement('div');
                    errorAlert.className = 'alert error';
                    errorAlert.textContent = 'There was an error submitting your application. Please try again later.';
                    medicalApplicationForm.prepend(errorAlert);
                    
                    // Remove error message after 5 seconds
                    setTimeout(() => {
                        errorAlert.remove();
                    }, 5000);
                }
            } else {
                // Show error message
                const errorAlert = document.createElement('div');
                errorAlert.className = 'alert error';
                errorAlert.textContent = 'Please fill in all required fields.';
                medicalApplicationForm.prepend(errorAlert);
                
                // Remove error message after 5 seconds
                setTimeout(() => {
                    errorAlert.remove();
                }, 5000);
            }
        });
    }
    
    // Whitelist Application Form
    const whitelistApplicationForm = document.getElementById('whitelist-application-form');
    if (whitelistApplicationForm) {
        whitelistApplicationForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = whitelistApplicationForm.querySelectorAll('[required]');
            
            // Check all required fields
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                try {
                    // Send to Discord webhook if the function exists
                    let success = true;
                    if (window.DiscordWebhook && typeof window.DiscordWebhook.processFormSubmission === 'function') {
                        success = await window.DiscordWebhook.processFormSubmission(whitelistApplicationForm, 'whitelist');
                    }
                    
                    // Show success message
                    const successAlert = document.createElement('div');
                    successAlert.className = 'alert success';
                    successAlert.textContent = 'Whitelist application submitted successfully! We will contact you soon.';
                    whitelistApplicationForm.prepend(successAlert);
                    
                    // Reset form
                    whitelistApplicationForm.reset();
                    
                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successAlert.remove();
                    }, 5000);
                } catch (error) {
                    console.error("Error submitting whitelist application:", error);
                    
                    // Show error message
                    const errorAlert = document.createElement('div');
                    errorAlert.className = 'alert error';
                    errorAlert.textContent = 'There was an error submitting your application. Please try again later.';
                    whitelistApplicationForm.prepend(errorAlert);
                    
                    // Remove error message after 5 seconds
                    setTimeout(() => {
                        errorAlert.remove();
                    }, 5000);
                }
            } else {
                // Show error message
                const errorAlert = document.createElement('div');
                errorAlert.className = 'alert error';
                errorAlert.textContent = 'Please fill in all required fields.';
                whitelistApplicationForm.prepend(errorAlert);
                
                // Remove error message after 5 seconds
                setTimeout(() => {
                    errorAlert.remove();
                }, 5000);
            }
        });
    }
    
    // Sticky header functionality
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});