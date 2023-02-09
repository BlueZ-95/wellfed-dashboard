import { NextApiRequest, NextApiResponse } from "next";
import { AdminServices } from "../../scripts/APIs/AdminService";

export interface CourseDetailsProps {
  id: number;
  title: string;
  body_html: string;
  imageSrc: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Register User in Strapi
    if (req.method === "POST") {
      const { id, title, body_html, images } = req.body;
      console.log(id, title, body_html, images);

      let courseData: CourseDetailsProps = {
        id: id,
        title: title,
        body_html: body_html,
        imageSrc: images[0].src,
      };

      await AdminServices.instance.addCourse(courseData);

      res.status(200).send("Success");
    } else {
      res.status(200).send("Success");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
