document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.tab');
    var panels = document.querySelectorAll('.tab-content');
  
    function changeTab(event) {
      tabs.forEach(function (tab) {
        tab.classList.remove('active');
      });
      panels.forEach(function (panel) {
        panel.classList.remove('active');
      });
  
      event.currentTarget.classList.add('active');
      var panelId = event.currentTarget.getAttribute('data-tab');
      document.getElementById(panelId).classList.add('active');
    }
  
    tabs.forEach(function (tab) {
      tab.addEventListener('click', changeTab);
    });
  });