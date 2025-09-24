'use server';

/**
 * @fileOverview A smart download link suggestion AI agent.
 *
 * - suggestSmartDownloadLink - A function that suggests the most appropriate download link based on the user's OS.
 * - SuggestSmartDownloadLinkInput - The input type for the suggestSmartDownloadLink function.
 * - SuggestSmartDownloadLinkOutput - The return type for the suggestSmartDownloadLink function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSmartDownloadLinkInputSchema = z.object({
  operatingSystem: z
    .string()
    .describe("The user's operating system (e.g., 'Android', 'iOS', 'Windows', 'macOS')."),
});
export type SuggestSmartDownloadLinkInput = z.infer<
  typeof SuggestSmartDownloadLinkInputSchema
>;

const SuggestSmartDownloadLinkOutputSchema = z.object({
  suggestedDownloadLink: z
    .string()
    .describe(
      'The most appropriate download link for the app based on the operating system.'
    ),
  reasoning: z
    .string()
    .describe(
      'The reasoning behind the suggested download link, explaining why it is the best choice for the user.'
    ),
});
export type SuggestSmartDownloadLinkOutput = z.infer<
  typeof SuggestSmartDownloadLinkOutputSchema
>;

export async function suggestSmartDownloadLink(
  input: SuggestSmartDownloadLinkInput
): Promise<SuggestSmartDownloadLinkOutput> {
  return suggestSmartDownloadLinkFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSmartDownloadLinkPrompt',
  input: {schema: SuggestSmartDownloadLinkInputSchema},
  output: {schema: SuggestSmartDownloadLinkOutputSchema},
  prompt: `You are a helpful assistant that suggests the best download link for an app based on the user's operating system.\n\nGiven the user's operating system: {{{operatingSystem}}}, suggest the most appropriate download link and explain your reasoning.\n\nConsider the following:\n- If the operating system is Android, suggest the Google Play Store link.\n- If the operating system is iOS, suggest the Apple App Store link.\n- If the operating system is Windows or macOS, explain that the app is currently only available on mobile and suggest either the Google Play Store or Apple App Store link depending on the user's preference or the context of their device (e.g., if they mention using an iPhone, suggest the App Store link).\n\nOutput the suggested download link and a clear explanation of your reasoning.`,
});

const suggestSmartDownloadLinkFlow = ai.defineFlow(
  {
    name: 'suggestSmartDownloadLinkFlow',
    inputSchema: SuggestSmartDownloadLinkInputSchema,
    outputSchema: SuggestSmartDownloadLinkOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
