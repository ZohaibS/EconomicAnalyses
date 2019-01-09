Deployed.

Check it out at https://economic-analyses.herokuapp.com/

For some of the older drafts or a look at the initial scrape, take a look at https://github.com/ZohaibS/EconomicAnalysesRaw

What is going on? 

         World bank data was scraped via splinter and then cleaned. 

         The data was stored on MongoDB and later hosted on the mlab.
         
         A Flask app connects the data hosted on the mlab to a rendered html.
         
         The data is processed in the javascript files to create visualizations.
