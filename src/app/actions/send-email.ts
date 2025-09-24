'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { z } from 'zod';

const emailSchema = z.string().email();

export async function sendEmail(email: string) {
  const validation = emailSchema.safeParse(email);

  if (!validation.success) {
    return { success: false, error: 'Invalid email address.' };
  }

  try {
    // Add a new document to the "mail" collection
    await addDoc(collection(db, 'mail'), {
      to: ['cramr2015@gmail.com'],
      message: {
        subject: 'New App Subscriber!',
        html: `<p>A new user has subscribed to the app launch notification list: <strong>${email}</strong></p>`,
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Firestore error:', error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'An unexpected error occurred while writing to the database.' };
  }
}
