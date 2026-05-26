## Context and Role
You are a frontend focused full-stack developer responsible for building modern, interactive web applications. Your expertise lies in creating visually engaging interfaces combined with efficient backend systems for handling structured data.
Your task is to design and implement a web application that presents information about multiple artificial intelligence models in a structured and visually appealing way. The system should guide users through different models their background , and their purpose using motion and smooth transitions.Additionally , the application must clearly reflect that it is designed and owned by Harshit Kumar, and this attribution should be visible in appropriate sections of the interface.You must ensure that the application remains responsive, accessible, and suitable for real-world usage while maintaining clean and maintainable code.

## Objective
#Develop a complete full-stack website that:

1-Displays information about multiple AI models in a structured format

2-Presents model details such as purpose, category, and timeline

3-Uses scroll-based animations to create a smooth content flow

4-Provides a modern, responsive interface with transitions

5-Includes a contact mechanism that allows users to submit queries

6-Stores user submissions securely

7-Sends an email notification with submitted details

8-Clearly shows Harshit Kumar as the designer/owner of the website

##  UI and Animation Requirements

#Scroll-Based Experience:

1-Implement animations that respond to scrolling behavior

2-Ensure content appears progressively as users navigate

3-Use motion effects such as:
  a-Fade-in transitions
                    
  b-Sequential element appearance
  
  c-Layered movement effects



#Section Flow

The interface must guide users through:

1-Introduction section

2-AI models overview section

3-Individual model details section

4-Timeline or progression section

5-Contact section

Each section should transition smoothly to maintain continuity.



#Animation Guidelines:

1-Use efficient rendering properties such as transform and opacity

2-Avoid heavy operations that affect performance

3-Ensure animations are smooth and consistent

4-Do not block scrolling or interaction

## Layout Requirements

The website must include:

#Introduction Section

1-Brief explanation of the purpose of the website

2-Animated heading or entry content

3-A subtle line such as:

   "Designed and developed by Harshit Kumar"

#AI Models Overview Section:

1-Display multiple AI models in a grid or list

2-Each model should be represented as a card



#Model Details Section:

Each model must include:

1-Model name

2-Short description

3-Primary use case

4-Approximate release period



#Timeline Section:

1-Show progression of models over time

2-Organize models in chronological or grouped format



#Contact Section:

1-Include a “Get in Touch” button

2-Provide access to a contact form



#Footer (Important Addition)

1-Must include:

  "© Harshit Kumar — All rights reserved"
  
  Optional: "AI Models Showcase Project"

  
          
#Layout Constraints

1-Must be responsive across devices

2-Use proper semantic HTML

3-Maintain consistent spacing and structure

4-Ensure readability and clarity


## Contact System Requirements

# Modal Interaction

1-Clicking the “Get in Touch” button must:

  Open a modal form
   
  Include smooth open and close animations
  
             
# Form Fields

The form must include:

1-Name (required)

2-Email (required, validated)

3-Phone Number (required, validated)

4-Message (optional)


#Validation Rules

1-Required fields must be filled

2-Email format must be valid

3-Errors must be displayed clearly

4-Submission must be prevented if validation fails

##Backend Requirements

1-Create an API endpoint to handle form submissions

2-Process and validate incoming data

3-Store submissions in:
                *Server logs
                *Optional database
                
                
#Email Notification:

1-Send a notification containing:
         
  *Name
          
  *Email
          
  *Phone number
        
  *Message
          
  *Timestamp
        
  *Include line: "Submission received via Harshit Kumar's AI Models Showcase website"
          
2-Use an email service such as SMTP or API-based solution


#Security Requirements:

1-Use environment variables for sensitive data

2-Implement basic protection against repeated submissions

##Data Processing Requirements

1-Sanitize all inputs before processing

2-Prevent:

  Cross-site scripting
       
   Injection attacks
       
3-Validate required fields properly


#API Response Format

Successful response:
             {  "success": true,  "message": "Submission successful"}

Error response:
             {  "success": false,  "error": "Invalid data"}

## Output Requirements

1-The final system must include:

  *A website displaying multiple AI models
  
  *Structured model information
          
  *Animated transitions between sections
           
  *Functional modal contact form

  *Email notification after submission
  
   *Confirmation message for users
  
   *Proper handling of failure cases
    
  *Clear attribution to Harshit Kumar as designer/owner

## Error Handling and Documentation

Error Handling:

1-Show validation errors on the frontend

2-Prevent invalid submissions

3-Handle backend errors properly

4-Return structured responses

5-Log errors for debugging

#DocumentationProvide:

1-Project structure

2-Setup instructions

3-Environment configuration

4-Deployment steps

## Performance and Scalability

1-Optimize loading and rendering

2-Load components when required

3-Ensure smooth animations across devices

4-Handle multiple requests efficiently

#Accessibility

1-Use semantic HTML

2-Ensure keyboard navigation

3-Maintain compatibility across browsers

## Technology Stack

1-FrontendReact or Next.js

2-Framer Motion

3-Tailwind CSS or similar

#Backend

1-Node.js with Express or API routes

2-Email handling service

3-dotenv for configuration

4-OptionalMongoDB or PostgreSQL
