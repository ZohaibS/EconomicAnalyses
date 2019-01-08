google.charts.load('current', {'packages':['sankey']});
      google.charts.setOnLoadCallback(drawChart);


function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Number of Countries');
        data.addRows([
          [ 'Received Low Level of Aid', 'Low Developed Nation', 2 ],
          [ 'Received Low Level of Aid', 'Medium Developed Nation', 35 ],
          [ 'Received Low Level of Aid', 'High Developed Nation', 4 ],
          [ 'Received Medium Level of Aid', 'Low Developed Nation', 6 ],
          [ 'Received Medium Level of Aid', 'Medium Developed Nation', 34 ],
          [ 'Received Medium Level of Aid', 'High Developed Nation', 1 ],
          [ 'Received High Level of Aid', 'Low Developed Nation', 14],
          [ 'Received High Level of Aid', 'Medium Developed Nation', 29]
        ]);

  // ############## I Doubt Anyone Else Will Ever Read This But #########################################
  // ############## Interesting Fact About Sankeys in Google Charts:  ###################################
  // ############## It doesn't like paths of 0 weight. It prefers you omit them entirely.   #############
  // ############## But it makes sense if you think about it. A path of 0 weight means there ############
  // ############## is no path to begin with so why would you draw one? #################################
  
  var colors = ['skyblue', 'hotpink', 'orange', 'forestgreen',
  'cyan', 'teal'];

        var options = {
          width: 480,
          sankey: {            iterations: 0,
            node: {
              colors: colors
            },
            link: {
              colorMode: 'gradient',
              colors: colors,

                  }
        }};

        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_basic_2'));
        chart.draw(data, options);
      }
