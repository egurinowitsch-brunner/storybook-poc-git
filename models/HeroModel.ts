export interface HeroProps {
    /**
     * Hero Title
     */
    title?: string;
    /**
     * Hero description
     */
    description?: string;
    /**
     * Is the background color Primary?
     */
    primaryBackgroundColor?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * What color should the title text be?
     */
    titleTextColor?: string;
    /**
     * What color should the description text be?
     */
    descriptionTextColor?: string;
    /**
     * Should the text be on the right?
     */
    textPosition?: boolean;
  }
