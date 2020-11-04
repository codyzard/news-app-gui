export const scrollOnTopList = (e) => {
    var scroll_to_id = document.getElementById("listnews");
    scroll_to_id.scrollIntoView({ behavior: "smooth" });
};
export const scrollOnTopFeatureNews = (e) => {
    var scroll_to_id = document.getElementById("list_feature_news");
    if (scroll_to_id) scroll_to_id.scrollIntoView({ behavior: "smooth" });
}