"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Add API endpoint for form submission
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Failed to submit');
      // Show success message
    } catch (error) {
      // Show error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-tertiary/40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title mb-8">Let's Connect</h2>
            <p className="subtitle mb-8">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-x-4">
                <div className="text-primary text-2xl">
                  <Mail />
                </div>
                <div>email@example.com</div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="text-primary text-2xl">
                  <Phone />
                </div>
                <div>+1234567890</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-accent rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                placeholder="Name"
                className="input"
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                placeholder="Email"
                className="input"
              />
              <textarea
                placeholder="Message"
                className="textarea"
              />
              <Button className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}; 