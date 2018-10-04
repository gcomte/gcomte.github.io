<style>
    body {
        background: black;
    }
    .page-header { display: none; }
    .site-footer { display: none; }
    .main-content {
        max-width:100%;
        padding: 0 0;
    }
    h1 {
        text-align: center !important;
        font-weight: bold !important;
        margin: 2.5rem !important;
        color: #FEDE36 !important;
    }
</style>
 

⚡ Timline of the Lightning Network ⚡
===

<!-- timeline container -->
<div id='timeline-embed' style="width: 100%; height: 600px"></div>


<!-- timeline imports -->
<link title="timeline-styles" rel="stylesheet" href="https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css">
<script src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"></script>

<!-- timeline data -->
<script type="text/javascript">
    timeline = new TL.Timeline('timeline-embed', 'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml');
</script>


<script>
    (function(){ 
        // change page title
        document.title = 'Lightning Network Timeline';
    })();
</script>