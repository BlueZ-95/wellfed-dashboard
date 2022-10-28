import { getCookie } from "cookies-next";
import { UserProps } from "../scripts/UIConfigs.types";

export const getUserDetails = (): UserProps => {
  let cookie = getCookie("userDetails");
  if (cookie) {
    return JSON.parse(cookie.toString());
  } else {
    return null;
  }
};

export const getConsumerCourses = async () => {
  const res = await fetch(
    "https://wellfed-content-api-rmedia.herokuapp.com/api/courses"
  );
  const data = await res.json();

  const rawData = data?.data;

  const courses = [];

  if (Array.isArray(rawData) && rawData.length > 0) {
    rawData.forEach((item) => {
      courses.push({
        CourseID: item.id,
        Title: item.attributes.Title,
        Label: item.attributes.Label,
      });
    });
  }
};
