import { CourseDetailsProps } from "../../pages/api/course-creation";
import { AdminEndpoints } from "./APIEndpoints.constants";
import { Methods } from "./Enums";

export class AdminServices {
  private constructor() {}

  public static instance = new AdminServices();

  async addCourse(courseDate: CourseDetailsProps) {
    const res = await fetch(AdminEndpoints.instance.courseCreation, {
      method: Methods[Methods.POST],
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          title: courseDate.title,
          description: courseDate.body_html,
          image_url: courseDate.imageSrc,
        },
      }),
    });

    const data = await res.json();

    console.log("data", data);

    return data;
  }
}
