artoo.autoExpand({
  elements: '.plugin_pagetree_children_list',
  canExpand: '.icon-section-closed',
  isExpanding: '.plugin_pagetree_children_content + .plugin_pagetree_children_container > ul:contains("Loading...")',
  expand: '.icon-section-closed',
  throttle: 20000,
  done: function() {
    console.log('Done!');
  }
});