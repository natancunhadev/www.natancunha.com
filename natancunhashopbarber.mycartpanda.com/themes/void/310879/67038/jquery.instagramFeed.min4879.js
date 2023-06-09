/*!
 * MIT License
 * 
 * jquery.instagramFeed
 *
 * @version 1.2.0
 *
 * @author Javier Sanahuja Liebana <bannss1@gmail.com>
 * @contributor csanahuja <csanahuja@gmail.com>
 *
 * https://github.com/jsanahuja/jquery.instagramFeed
 *
 */
(function (h) {
    var k = {
            host: "//www.instagram.com/",
            username: "",
            tag: "",
            container: "",
            display_profile: !0,
            display_biography: !0,
            display_gallery: !0,
            display_igtv: !1,
            get_data: !1,
            callback: null,
            styling: !0,
            items: 8,
            items_per_row: 4,
            margin: 0.5,
            image_size: 640,
        },
        l = { 150: 0, 240: 1, 320: 2, 480: 3, 640: 4 };
    h.instagramFeed = function (r) {
        var a = h.fn.extend({}, k, r);
        if ("" == a.username && "" == a.tag) return console.error("Instagram Feed: Error, no username or tag found."), !1;
        "undefined" !== typeof a.get_raw_json && (console.warn("Instagram Feed: get_raw_json is deprecated. See use get_data instead"), (a.get_data = a.get_raw_json));
        if (!a.get_data && "" == a.container) return console.error("Instagram Feed: Error, no container found."), !1;
        if (a.get_data && null == a.callback) return console.error("Instagram Feed: Error, no callback defined to get the raw json"), !1;
        var m = "" == a.username;
        h.get(m ? a.host + "explore/tags/" + a.tag : a.host + a.username, function (b) {
            b = b.split("window._sharedData = ")[1].split("\x3c/script>")[0];
            b = JSON.parse(b.substr(0, b.length - 1));
            b = b.entry_data.ProfilePage || b.entry_data.TagPage;
            if(b==undefined){
            	$.ajax({
                      headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
		              url: '/instagram/get',
		              type: 'GET',
		              dataType: 'JSON',
		              data: { username: a.username ? a.username : a.tag, theme_name: 'void' },
		              success:function(data){
		                  //console.log(JSON.parse(data.media_json));
		                 var b = JSON.parse(data.media_json);

			            b = b[0].graphql.user || b[0].graphql.hashtag;
			            if (a.get_data) a.callback(b);
			            else {
			                var d = "",
			                    f = "",
			                    g = "",
			                    e = "",
			                    n = "";
			                a.styling &&
			                    ((d = " style='text-align:center;'"),
			                    (f = " style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'"),
			                    (g = " style='font-size:1.2em;'"),
			                    (e = " style='font-size:1em;'"),
			                    (n = " style='margin:" + a.margin + "% " + a.margin + "%;width:" + (100 - 2 * a.margin * a.items_per_row) / a.items_per_row + "%;float:left;'"));
			                var c = "";
			                a.display_profile &&
			                    ((c = c + ("<div class='instagram_profile'" + d + ">") + ("\t<img class='instagram_profile_image' src='" + b.profile_pic_url + "' alt='" + b.name + " profile pic'" + f + " />")),
			                    (c = m
			                        ? c + ("\t<p class='instagram_tag'" + g + "><a href='https://www.instagram.com/explore/tags/" + a.tag + "' rel='noopener' target='_blank'>#" + a.tag + "</a></p>")
			                        : c + ("\t<p class='instagram_username'" + g + ">@" + b.full_name + " (<a href='https://www.instagram.com/" + a.username + "' rel='noopener' target='_blank'>@" + a.username + "</a>)</p>")),
			                    !m && a.display_biography && (c += "\t<p class='instagram_biography'" + e + ">" + b.biography + "</p>"),
			                    (c += "</div>"));
			                g = "undefined" !== typeof l[a.image_size] ? l[a.image_size] : l[640];
			                if (a.display_gallery)
			                    if ("undefined" !== typeof b.is_private && !0 === b.is_private) c += "<p class='instagram_private'><strong>This profile is private</strong></p>";
			                    else {
			                        e = (b.edge_owner_to_timeline_media || b.edge_hashtag_to_media).edges;
			                        f = e.length > a.items ? a.items : e.length;
			                        c += "<div class='instagram_gallery'>";
			                        for (d = 0; d < f; d++) {
			                            var k = "https://www.instagram.com/p/" + e[d].node.shortcode;
			                            switch (e[d].node.__typename) {
			                                case "GraphSidecar":
			                                    var p = "sidecar";
			                                    var q = e[d].node.thumbnail_resources[g].src;
			                                    break;
			                                case "GraphVideo":
			                                    p = "video";
			                                    q = e[d].node.thumbnail_src;
			                                    break;
			                                default:
			                                    (p = "image"), (q = e[d].node.thumbnail_resources[g].src);
			                            }
			                            c += "\t<a href='" + k + "' class='instagram-" + p + "' rel='noopener' target='_blank'>";
			                            c += "   \t<img src='" + q + "' alt='" + b.name + " instagram image " + d + "'" + n + " />";
			                            c += "\t</a>";
			                        }
			                        c += "</div>";
			                    }
			                if (a.display_igtv && "undefined" !== typeof b.edge_felix_video_timeline && ((b = b.edge_felix_video_timeline.edges), (f = b.length > a.items ? a.items : b.length), 0 < b.length)) {
			                    c += "<div class='instagram_igtv'>";
			                    for (d = 0; d < f; d++)
			                        (c += "\t<a href='https://www.instagram.com/p/" + b[d].node.shortcode + "' rel='noopener' target='_blank'>"),
			                            (c += "\t\t<img src='" + b[d].node.thumbnail_src + "' alt='" + a.username + " instagram image " + d + "'" + n + " />"),
			                            (c += "\t</a>");
			                    c += "</div>";
			                }
			                h(a.container).html(c);
			            }
		              }
		          });
            	//console.log('here-'+b);
            }else{
		        $.ajax({
                      headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") },
		              url: '/instagram/save',
		              type: 'POST',
		              data: { username: a.username ? a.username : a.tag, media_json: JSON.stringify(b), theme_name: 'void' },
		              success:function(data){
			            b = b[0].graphql.user || b[0].graphql.hashtag;
			            if (a.get_data) a.callback(b);
			            else {
			                var d = "",
			                    f = "",
			                    g = "",
			                    e = "",
			                    n = "";
			                a.styling &&
			                    ((d = " style='text-align:center;'"),
			                    (f = " style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'"),
			                    (g = " style='font-size:1.2em;'"),
			                    (e = " style='font-size:1em;'"),
			                    (n = " style='margin:" + a.margin + "% " + a.margin + "%;width:" + (100 - 2 * a.margin * a.items_per_row) / a.items_per_row + "%;float:left;'"));
			                var c = "";
			                a.display_profile &&
			                    ((c = c + ("<div class='instagram_profile'" + d + ">") + ("\t<img class='instagram_profile_image' src='" + b.profile_pic_url + "' alt='" + b.name + " profile pic'" + f + " />")),
			                    (c = m
			                        ? c + ("\t<p class='instagram_tag'" + g + "><a href='https://www.instagram.com/explore/tags/" + a.tag + "' rel='noopener' target='_blank'>#" + a.tag + "</a></p>")
			                        : c + ("\t<p class='instagram_username'" + g + ">@" + b.full_name + " (<a href='https://www.instagram.com/" + a.username + "' rel='noopener' target='_blank'>@" + a.username + "</a>)</p>")),
			                    !m && a.display_biography && (c += "\t<p class='instagram_biography'" + e + ">" + b.biography + "</p>"),
			                    (c += "</div>"));
			                g = "undefined" !== typeof l[a.image_size] ? l[a.image_size] : l[640];
			                if (a.display_gallery)
			                    if ("undefined" !== typeof b.is_private && !0 === b.is_private) c += "<p class='instagram_private'><strong>This profile is private</strong></p>";
			                    else {
			                        e = (b.edge_owner_to_timeline_media || b.edge_hashtag_to_media).edges;
			                        f = e.length > a.items ? a.items : e.length;
			                        c += "<div class='instagram_gallery'>";
			                        for (d = 0; d < f; d++) {
			                            var k = "https://www.instagram.com/p/" + e[d].node.shortcode;
			                            switch (e[d].node.__typename) {
			                                case "GraphSidecar":
			                                    var p = "sidecar";
			                                    var q = e[d].node.thumbnail_resources[g].src;
			                                    break;
			                                case "GraphVideo":
			                                    p = "video";
			                                    q = e[d].node.thumbnail_src;
			                                    break;
			                                default:
			                                    (p = "image"), (q = e[d].node.thumbnail_resources[g].src);
			                            }
			                            c += "\t<a href='" + k + "' class='instagram-" + p + "' rel='noopener' target='_blank'>";
			                            c += "   \t<img src='" + q + "' alt='" + b.name + " instagram image " + d + "'" + n + " />";
			                            c += "\t</a>";
			                        }
			                        c += "</div>";
			                    }
			                if (a.display_igtv && "undefined" !== typeof b.edge_felix_video_timeline && ((b = b.edge_felix_video_timeline.edges), (f = b.length > a.items ? a.items : b.length), 0 < b.length)) {
			                    c += "<div class='instagram_igtv'>";
			                    for (d = 0; d < f; d++)
			                        (c += "\t<a href='https://www.instagram.com/p/" + b[d].node.shortcode + "' rel='noopener' target='_blank'>"),
			                            (c += "\t\t<img src='" + b[d].node.thumbnail_src + "' alt='" + a.username + " instagram image " + d + "'" + n + " />"),
			                            (c += "\t</a>");
			                    c += "</div>";
			                }
			                h(a.container).html(c);
			            }
		              }, error:function(error){
		              	//console.log(error);
			          }
		          });
            	//console.log('else-here-'+b);
            }
        }).fail(function (a) {
            console.error("Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: ", a.status);
        });
        return !0;
    };
})(jQuery);
