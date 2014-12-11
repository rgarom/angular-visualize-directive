angular-visualize-directive
===========================

AngularJS directive to embed JasperReport Server reports &amp; visualizations using Visualize.js framework.

It is necessary to have the commercial edition of Jaspersoft in order to use Visualize.js, specifically Jaspersoft BI Enterprise or Professional. JasperReports Server shall be installed.

Configuration:

1. Provide URL to **Visualize.js** ():

  ```<script type="text/javascript" src="http://localhost:<port>/jasperserver-pro/client/visualize.js"></script>```

2. Include the directive module in your app:

  ```
  var app = angular.module('App', [
	  'angular-visualize-directive'
  ]);
  ```
  
3. Configure your **JasperServer** connection inside the directive:

  ``` 
  visualize(
      {
        auth: {
            name: "jasperadmin",
            password: "jasperadmin",
            organization: "organization_1"
        }
    } 
    ```

4. Insert the **visualize** directive with the desired parameters. *Resource* will receive the report path and *params* the additional report parameters.

  ``` <visualize id='report' resource='report.resource' params='report.params'></visualize> ```
