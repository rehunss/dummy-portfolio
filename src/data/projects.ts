export interface Project {
  slug: string;
  brand: string;
  title: string;
  category: string;
  year: string;
  description: string;
  headline: string;
  image: string;
  imageAlt: string;
  accent: string;
  role: string;
  context: string;
  tension: string;
  choice: string;
  audience: string;
  promise: string;
  action: string;
  deliverables: string[];
  strategy: { title: string; body: string }[];
  channels: { stage: string; channel: string; goal: string }[];
}

export const projects: Project[] = [
  {
    slug: 'after-hours',
    brand: 'Aeru',
    title: 'After Hours',
    category: 'Brand launch & campaign strategy',
    year: '2026',
    description: 'Turning the everyday commute into a reason to choose a different ride.',
    headline: 'Own the ride home.',
    image: '/media/projects/after-hours.webp',
    imageAlt: 'An original electric bicycle in a cinematic blue-hour city setting, generated for the fictional Aeru campaign.',
    accent: '#6c8eff',
    role: 'Research synthesis, positioning, campaign strategy & funnel planning',
    context: 'Aeru is a fictional electric bicycle brand entering a crowded urban mobility category. The concept brief was to find a compelling reason to choose the brand beyond battery life, range and price.',
    tension: 'The audience hypothesis: city commuters may see the journey home as another obligation, when it could be a little time of their own. This is a strategic assumption developed for the concept, rather than a claim from field research.',
    choice: 'Position the ride home as a small act of independence. Lead with an emotional invitation, support it with practical product information, and make the next step a low-pressure test-ride enquiry.',
    audience: 'City commuters who want more freedom in their daily routine, but still need practical reasons to switch.',
    promise: 'A different kind of ride home: personal, flexible and on your own terms.',
    action: 'Explore your next ride',
    deliverables: ['Audience hypothesis & persona sheet', 'Positioning canvas', 'Messaging hierarchy', 'Campaign key visual & touchpoint mockups', 'Launch channel plan', 'Measurement framework'],
    strategy: [
      { title: 'Find the human tension.', body: 'Move the conversation from a specification sheet to a recognisable moment: leaving work and taking the city at your own pace. Validate that tension through interviews before a real launch.' },
      { title: 'Give the idea a job.', body: '“Own the ride home” becomes the organising line. Product details provide reasons to believe, while a consistent night-time visual system gives the launch a recognisable setting.' },
      { title: 'Connect the next step.', body: 'A campaign only earns attention if people can act on it. The proposed landing page answers practical questions before offering a test-ride enquiry, with clearly defined events for evaluation.' },
    ],
    channels: [
      { stage: 'Awareness', channel: 'Outdoor creative & social video concept', goal: 'Make the emotional proposition recognisable; measure qualified landing-page visits.' },
      { stage: 'Consideration', channel: 'Product landing page & comparison content', goal: 'Answer range, comfort and ownership questions; measure engaged product exploration.' },
      { stage: 'Enquiry', channel: 'Test-ride form concept & follow-up email', goal: 'Turn interest into a useful conversation; measure valid test-ride enquiries per session.' },
    ],
  },
  {
    slug: 'quiet-form',
    brand: 'Kala Form',
    title: 'Quiet Form',
    category: 'Brand positioning & messaging',
    year: '2025',
    description: 'Finding a clearer voice for furniture designed to stay.',
    headline: 'Less noise. More living.',
    image: '/media/projects/quiet-form.webp',
    imageAlt: 'An original sculptural timber chair in a sunlit concrete interior, generated for the fictional Kala Form brand.',
    accent: '#e6ad72',
    role: 'Audience hypotheses, brand positioning & messaging',
    context: 'Kala Form is a fictional furniture label with a considered product range but an indistinct story. The brief was to express its value in language that helps someone imagine living with the pieces.',
    tension: 'The working hypothesis: design-conscious buyers can appreciate good materials without understanding why one piece belongs in their life. A list of timber species and dimensions does not always close that gap.',
    choice: 'Reframe the brand around lasting ease. Use material and construction details as evidence, while the central message is about making room for everyday living.',
    audience: 'Thoughtful home-makers choosing fewer, more considered pieces rather than constantly replacing what they own.',
    promise: 'Furniture that brings calm to the room and makes space for the life around it.',
    action: 'Find your everyday piece',
    deliverables: ['Illustrative category map', 'Simulated interview guide', 'Brand positioning platform', 'Value proposition & message map', 'Campaign poster concept', 'Landing-page copy direction'],
    strategy: [
      { title: 'Map the conversation.', body: 'Create an illustrative category map around decorative expression and everyday practicality. Use it to frame research questions, rather than present an unverified claim about real competitors.' },
      { title: 'Choose a useful promise.', body: '“Less noise. More living.” gives the brand a point of view. It connects visual restraint to an everyday benefit, then asks product detail to earn that promise.' },
      { title: 'Make the words work.', body: 'Build a message hierarchy from emotional value to practical proof: how it feels in a room, what it is made from, how it is cared for, and what someone needs to know before choosing.' },
    ],
    channels: [
      { stage: 'Discovery', channel: 'Editorial campaign & social image series', goal: 'Introduce the brand point of view in rooms that feel lived in and considered.' },
      { stage: 'Evaluation', channel: 'Collection landing page & product storytelling', goal: 'Connect the feeling of a space with specific materials, construction and care information.' },
      { stage: 'Confidence', channel: 'Care guide & enquiry pathway concept', goal: 'Reduce unanswered questions and help a buyer make a considered decision.' },
    ],
  },
  {
    slug: 'tidal-memory',
    brand: 'Sora Coast',
    title: 'Tidal Memory',
    category: 'Acquisition strategy & customer journey',
    year: '2025',
    description: 'Connecting the feeling of getting away with a clearer path to getting there.',
    headline: 'A little further from ordinary.',
    image: '/media/projects/tidal-memory.webp',
    imageAlt: 'A fictional tropical coastal retreat with natural stone and linen, generated for the Sora Coast concept.',
    accent: '#9dc7c5',
    role: 'Customer journey, acquisition planning & experiment design',
    context: 'Sora Coast is a fictional coastal retreat. The brief explores how a small hospitality brand could connect inspiring destination imagery with the practical information people need to consider a stay.',
    tension: 'The working hypothesis: people can save a beautiful destination and still stop short of planning a trip. The gap may be less about desire and more about unanswered questions on access, timing and what a stay includes.',
    choice: 'Keep the sense of escape, then make the journey concrete. Connect inspiration to a practical landing page and a short email sequence that helps a prospective guest picture and plan the experience.',
    audience: 'Independent travellers looking for a quieter coastal break, with enough information to make a confident plan.',
    promise: 'A considered coastal escape, with the details taken care of before you arrive.',
    action: 'Picture your time away',
    deliverables: ['Customer journey map', 'Acquisition channel mix', 'Landing-page funnel concept', 'Three-part email sequence', 'Experiment backlog', 'Event measurement plan'],
    strategy: [
      { title: 'Start with the journey.', body: 'Map the transition from inspiration to consideration and enquiry. Identify the questions someone needs answered at each moment rather than assuming the same creative can do every job.' },
      { title: 'Give desire a direction.', body: 'Carry the visual atmosphere into a landing page that explains rooms, access, seasonal considerations and the shape of a stay. A booking system is outside this fictional concept.' },
      { title: 'Test the useful details.', body: 'Propose experiments around access information, stay itineraries and enquiry copy. Prioritise by learning value and effort; set success measures before any real traffic would be acquired.' },
    ],
    channels: [
      { stage: 'Inspiration', channel: 'Travel editorial & social discovery concept', goal: 'Introduce a distinctive sense of place and encourage relevant visits.' },
      { stage: 'Planning', channel: 'Destination landing page & sample itinerary', goal: 'Answer practical questions and make the stay easier to imagine.' },
      { stage: 'Consideration', channel: 'Welcome, experience & practical-details emails', goal: 'Provide useful context and invite an informed enquiry without pressure.' },
    ],
  },
];
