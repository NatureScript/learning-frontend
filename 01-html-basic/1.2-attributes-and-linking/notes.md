# HTML Basics: 1.2 Attributes and Linking

## Key Concepts:

* **HTML Attributes:**
    * What are attributes? (Provide additional information about HTML elements)
    * Common attributes:
        * `id`: Unique identifier for an element (e.g., `<div id="main-content">`)
        * `class`: Groups elements for styling or JavaScript manipulation (e.g., `<p class="highlight">`)
        * `style`: Inline CSS styles (though generally discouraged for complex styling, good for quick tests) (e.g., `<p style="color: blue;">`)
        * `src`: Source for media elements (e.g., `<img src="image.jpg">`, `<script src="script.js">`)
        * `href`: Hypertext reference for links (e.g., `<a href="page.html">`, `<link href="style.css">`)
        * `alt`: Alternative text for images (important for accessibility) (e.g., `<img src="logo.png" alt="Company Logo">`)
        * `title`: Provides extra information (tooltip) on hover (e.g., `<p title="This is a tooltip">`)
* **Hyperlinks (`<a>` tag):**
    * Creating text links to other pages (internal and external).
    * Linking to sections within the same page (`#id`).
    * Opening links in a new tab (`target="_blank"`).
    * Email links (`mailto:`).
    * Phone links (`tel:`).
* **Image Inclusion (`<img>` tag):**
    * Embedding images using `src` and `alt` attributes.
    * Basic image sizing with `width` and `height` attributes (though CSS is often preferred for more control).
* **Other common attributes:**
    * `lang`: Specifies the language of the element's content.
    * `data-*`: Custom data attributes for JavaScript.

## Practice Exercises:

1.  Create an `index.html` file in this folder. (Already done!)
2.  Add various HTML elements (headings, paragraphs, divs, spans).
3.  Apply `id`, `class`, and `style` attributes to different elements.
4.  Create a link to an external website (e.g., Google).
5.  Create a link to another (non-existent yet) HTML page within your `01-html-basics` module.
6.  Create an image folder (`images/`) and place a sample image inside. (Already done!)
7.  Embed an image in your `index.html` using the `<img>` tag, ensuring you use `src` and `alt` attributes.
8.  Experiment with `mailto:` and `tel:` links.
9.  Add `title` attributes to a few elements and observe the tooltip.