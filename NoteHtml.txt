What is HTML?
HTML stands for Hyper Text Markup Language
HTML is the standard markup language for creating Web pages
HTML describes the structure of a Web page
HTML consists of a series of elements
HTML elements tell the browser how to display the content
HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.


======== 
  Example 

<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
          
====   
   =====  explanation : ==>

Example Explained
1.The <!DOCTYPE html> declaration defines that this document is an HTML5 document
2.The <html> element is the root element of an HTML page
3.The <head> element contains meta information about the HTML page
4.The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
5.The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
6.The <h1> element defines a large heading
7.The <p> element defines a paragraph



===== 

What is an HTML Element?
An HTML element is defined by a start tag, some content, and an end tag:

<tag_name> Content goes here... </tag_name>
The HTML element is everything from the start tag to the end tag:

<h1>My First Heading</h1>
<p>My first paragraph.</p>

===>

Note: Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!


==========================

HTML Documents

-->All HTML documents must start with a document type declaration: <!DOCTYPE html>.

-->The HTML document itself begins with <html> and ends with </html>.

-->The visible part of the HTML document is between <body> and </body>.

========<<<<<<<=<>   The <!DOCTYPE> <>=>>>>>>>=======Declaration
The <!DOCTYPE> declaration represents the document type, and helps browsers to display web pages correctly.

It must only appear once, at the top of the page (before any HTML tags).

The <!DOCTYPE> declaration is not case sensitive.

The <!DOCTYPE> declaration for HTML5 is:

====================

HTML Headings
HTML headings are defined with the <h1> to <h6> tags.

<h1> defines the most important heading. <h6> defines the least important heading: 

=====================

HTML Links
HTML links are defined with the <a> tag:

The link's destination is specified in the href attribute. 

Attributes are used to provide additional information about HTML elements.

You will learn more about attributes in a later chapter.
======================

HTML Images
HTML images are defined with the <img> tag.

The source file (src), alternative text (alt), width, and height are provided as attributes:

Example

<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">

============================

HTML Attributes
All HTML elements can have attributes
Attributes provide additional information about elements
Attributes are always specified in the start tag
Attributes usually come in name/value pairs like: name="value"

============================

The href Attribute
The <a> tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:

Example
<a href="https://www.w3schools.com">Visit W3Schools</a>

================================


The src Attribute
The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:

Example
<img src="img_girl.jpg">


==============

There are two ways to specify the URL in the src attribute:

1. Absolute URL - Links to an external image that is hosted on another website. Example: src="https://www.w3schools.com/images/img_girl.jpg".

Notes: External images might be under copyright. If you do not get permission to use it, you may be in violation of copyright laws. In addition, you cannot control external images; it can suddenly be removed or changed.

2. Relative URL - Links to an image that is hosted within the website. Here, the URL does not include the domain name. If the URL begins without a slash, it will be relative to the current page. Example: src="img_girl.jpg". If the URL begins with a slash, it will be relative to the domain. Example: src="/images/img_girl.jpg".

Tip: It is almost always best to use relative URLs. They will not break if you change domain.

===================

The width and height Attributes
The <img> tag should also contain the width and height attributes, which specify the width and height of the image (in pixels):

Example
<img src="img_girl.jpg" width="500" height="600">

==============

The alt Attribute
The required alt attribute for the <img> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the src attribute, or if the user uses a screen reader.

Example
<img src="img_girl.jpg" alt="Girl with a jacket">

=======

Chapter Summary
All HTML elements can have attributes
The href attribute of <a> specifies the URL of the page the link goes to
The src attribute of <img> specifies the path to the image to be displayed
The width and height attributes of <img> provide size information for images
The alt attribute of <img> provides an alternate text for an image
The style attribute is used to add styles to an element, such as color, font, size, and more
The lang attribute of the <html> tag declares the language of the Web page
The title attribute defines some extra information about an element

===============================

HTML Display
You cannot be sure how HTML will be displayed.

Large or small screens, and resized windows will create different results.

With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.

The browser will automatically remove any extra spaces and lines when the page is displayed:

=================

HTML Horizontal Rules
The <hr> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.

The <hr> element is used to separate content (or define a change) in an HTML page:

<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>

The <hr> tag is an empty tag, which means that it has no end tag.
====================================
HTML Line Breaks
The HTML <br> element defines a line break.

Use <br> if you want a line break (a new line) without starting a new paragraph:

Example
<p>This is<br>a paragraph<br>with line breaks.</p>

The <br> tag is an empty tag, which means that it has no end tag.

====================

The Poem Problem
[pre-formatted tag]

The HTML <pre> element defines preformatted text.

The text inside a <pre> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:

<pre>
          My Bonnie lies over the ocean.

      My Bonnie lies over the sea.

          My Bonnie lies over the ocean.

      Oh, bring back my Bonnie to me.
</pre>