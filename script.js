(function() {
  angular
  .module("stuff", [
    "ui.router",
    "ngResource"
  ])
  .config(["$stateProvider", Router])
  // .factory("UrlFactory", UrlFactory)
  .controller("IndexController", IndexControllerFunction)
  .controller("ShowController", ShowVmControllerFunction)

  Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
  function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $stateProvider
  .state("index", {
    url: "/index",
    templateUrl: "doi-index.html",
    controller: "IndexController",
    controllerAs: "indexVm"
  })
  .state("show", {
    url: "/show/:_id",
    templateUrl: "doi-show.html",
    controller: "ShowController",
    controllerAs: "showVm"
  });
}

  // UrlFactory.$inject = ["$http, $resource"];
  // function UrlFactory($http, $resource){
  //   dois = ["10.1007/978-1-4419-9716-6_11", "10.1056/NEJMoa1402121", "10.1116/1.4904970", "10.1103/PhysRevB.63.224204", "10.4028/www.scientific.net/AMM.7-8.159", "10.1111/j.1365-277X.2004.00520.x", "10.1002/pmic.200600525", "10.1161/CIRCRESAHA.117.306290", "10.1002/smll.201002009", "10.1002/3527603433.ch3", "10.1007/s10832-012-9736-1", "10.1038/nmat3258", "10.1158/1541-7786.MCR-14-0590", "10.1109/ISPASS.2015.7095803", "10.1017/S0034670512001088", "10.2514/3.59819", "10.1002/14651858", "10.1128/JB.02242-14", "10.1057/9781137555298", "10.1109/ISNE.2014.6839382", "10.2478/s11696-011-0110-6", "10.1007/978-3-319-28658-7_55", "10.1038/nmat1849", "10.1038/nbt.2842", "10.1038/nphys3430", "10.1038/nn.4065", "10.1016/j.joen.2009.12.007", "10.1038/nature16961", "10.1021/acs.jpcc.5b04175", "10.1007/s11948-014-9521-4", "10.1007/s10677-015-9567-7", "10.1109/TKDE.2013.109", "10.1016/j.cell.2015.09.038", "10.1021/nn1006368", "10.1038/nprot.2013.143", "10.1524/ncrs.2011.0091", "10.1162/jocn_a_00880", "10.1103/PhysRevLett.116.061102", "10.1056/NEJMra1412877", "10.1001/jama.2013.284427", "10.1016/0003-2697(76)90527-3", "10.1038/nprot.2008.73", "10.1126/science.1102896", "10.1021/acsnano.5b02877", "10.1021/ja01539a017", "10.1016/0042-6989(94)90152-X", "10.1038/nrg2626", "10.1002/adma.201001068", "10.1038/nprot.2008.211", "10.1038/nprot.2012.016", "10.1016/j.jmbbm.2015.01.013", "10.1056/NEJMra1413919", "10.4028/www.scientific.net/AMR.217-218.88", "10.1007/s10858-015-9995-7", "10.1016/0927-796X(95)00185-9", "10.1038/nature04969", "10.1038/nature16549", "10.1007/s11886-015-0565-0", "10.1586/17512433.2015.1012494", "10.1038/nature04233", "10.1007/BF00023219", "10.1038/nature14098", "10.1016/j.carbon.2007.02.034", "10.1109/ACCESS.2014.2362522", "10.1146/annurev.bi.52.070183.003255", "10.1038/nmat2297", "10.1126/science.1231143", "10.1073/pnas.1510461112", "10.1038/nrg2484", "10.1038/nnano.2007.451", "10.1056/NEJMcp1503950", "10.1126/science.1187145", "10.1038/nmat1368", "10.1038/353737a0", "10.1038/nn.4105", "10.1056/NEJMra1404489", "10.2113/gssgfbull.186.2-3.193", "10.1021/cr0500535", "10.1126/science.1258096", "10.1126/science.aad5227", "10.1016/0928-7655(93)90017-o", "10.1001/jama.2015.9536", "10.1126/science.1225829", "10.1210/me.2015-1133", "10.1038/nature12509", "10.1002/ijc.29210", "10.1038/nrmicro3432", "10.1038/nature15709", "10.1038/nature06016", "10.1021/cr068445e", "10.1103/RevModPhys.81.109", "10.1038/nature14539", "10.1039/B917103G", "10.1021/cr100449n", "10.1016/j.cell.2011.02.013", "10.1038/nature15756", "10.1152/japplphysiol.00319.2015", "10.1016/j.biomaterials.2004.10.012", "10.1126/science.1258096", "10.1126/science.aad5227", "10.1016/0928-7655(93)90017-o", "10.1001/jama.2015.9536", "10.1126/science.1225829"];
  //   query = "";
  //   return {
  //     queryCrossref: function(query) {
  //       for (i = 0; i < dois.length; i++) {
  //         console.log(dois);
  //         $.getJSON(url).done(function(res) {
  //           $.each(res.Search, function(item) {
  //             dois.push(item);
  //           });
  //           console.log(dois);
  //         });
  //       };
  //       var baseurl = $resource("http://api.crossref.org/works/", {}, {
  //         update: {method: "PUT"}
  //       })
  //       var newurl = baseurl + dois[i]
  //     }
  //   }
  // };

  IndexControllerFunction.$inject = ["$http"];
  function IndexControllerFunction($http){
    var indexVm = this;
    dois = ["10.1007/978-1-4419-9716-6_11", "10.1056/NEJMoa1402121", "10.1116/1.4904970", "10.1103/PhysRevB.63.224204", "10.4028/www.scientific.net/AMM.7-8.159", "10.1111/j.1365-277X.2004.00520.x", "10.1002/pmic.200600525", "10.1161/CIRCRESAHA.117.306290", "10.1002/smll.201002009", "10.1002/3527603433.ch3", "10.1007/s10832-012-9736-1", "10.1038/nmat3258", "10.1158/1541-7786.MCR-14-0590", "10.1109/ISPASS.2015.7095803", "10.1017/S0034670512001088", "10.2514/3.59819", "10.1002/14651858", "10.1128/JB.02242-14", "10.1057/9781137555298", "10.1109/ISNE.2014.6839382", "10.2478/s11696-011-0110-6", "10.1007/978-3-319-28658-7_55", "10.1038/nmat1849", "10.1038/nbt.2842", "10.1038/nphys3430", "10.1038/nn.4065", "10.1016/j.joen.2009.12.007", "10.1038/nature16961", "10.1021/acs.jpcc.5b04175", "10.1007/s11948-014-9521-4", "10.1007/s10677-015-9567-7", "10.1109/TKDE.2013.109", "10.1016/j.cell.2015.09.038", "10.1021/nn1006368", "10.1038/nprot.2013.143", "10.1524/ncrs.2011.0091", "10.1162/jocn_a_00880", "10.1103/PhysRevLett.116.061102", "10.1056/NEJMra1412877", "10.1001/jama.2013.284427", "10.1016/0003-2697(76)90527-3", "10.1038/nprot.2008.73", "10.1126/science.1102896", "10.1021/acsnano.5b02877", "10.1021/ja01539a017", "10.1016/0042-6989(94)90152-X", "10.1038/nrg2626", "10.1002/adma.201001068", "10.1038/nprot.2008.211", "10.1038/nprot.2012.016", "10.1016/j.jmbbm.2015.01.013", "10.1056/NEJMra1413919", "10.4028/www.scientific.net/AMR.217-218.88", "10.1007/s10858-015-9995-7", "10.1016/0927-796X(95)00185-9", "10.1038/nature04969", "10.1038/nature16549", "10.1007/s11886-015-0565-0", "10.1586/17512433.2015.1012494", "10.1038/nature04233", "10.1007/BF00023219", "10.1038/nature14098", "10.1016/j.carbon.2007.02.034", "10.1109/ACCESS.2014.2362522", "10.1146/annurev.bi.52.070183.003255", "10.1038/nmat2297", "10.1126/science.1231143", "10.1073/pnas.1510461112", "10.1038/nrg2484", "10.1038/nnano.2007.451", "10.1056/NEJMcp1503950", "10.1126/science.1187145", "10.1038/nmat1368", "10.1038/353737a0", "10.1038/nn.4105", "10.1056/NEJMra1404489", "10.2113/gssgfbull.186.2-3.193", "10.1021/cr0500535", "10.1126/science.1258096", "10.1126/science.aad5227", "10.1016/0928-7655(93)90017-o", "10.1001/jama.2015.9536", "10.1126/science.1225829", "10.1210/me.2015-1133", "10.1038/nature12509", "10.1002/ijc.29210", "10.1038/nrmicro3432", "10.1038/nature15709", "10.1038/nature06016", "10.1021/cr068445e", "10.1103/RevModPhys.81.109", "10.1038/nature14539", "10.1039/B917103G", "10.1021/cr100449n", "10.1016/j.cell.2011.02.013", "10.1038/nature15756", "10.1152/japplphysiol.00319.2015", "10.1016/j.biomaterials.2004.10.012", "10.1126/science.1258096", "10.1126/science.aad5227", "10.1016/0928-7655(93)90017-o", "10.1001/jama.2015.9536", "10.1126/science.1225829"];
    indexVm.query = function() {
      for(i = 0; i < dois.length; i++){
        $http({
          method: "GET",
          url: "http://api.crossref.org/works/" + dois[0]
        }).then(function(res) {
          console.log(res);
          return res
        })

      }
    }
    indexVm.query()
    // indexVm.dois = UrlFactory.query();
  }
  ShowVmControllerFunction.$inject = ["UrlFactory"];
  function ShowVmControllerFunction(){
    var ShowVm      = this;
    showVm.doi = UrlFactory.get({id: $stateParams.id});
  }

})();
