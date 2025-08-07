import React from "react";
import NotificationsHeader from "./NotificationsHeader";
import NotificationTitle from "./NotificationTitle";
import DiscoverMore from "@/components/general/DiscoverMore";
import NotificationCapabilities from "./NotificationCapabilities";

const MainNotifications = () => {
  return <div>
    <NotificationsHeader />
    <NotificationCapabilities />
    <NotificationTitle />
    <DiscoverMore />
  </div>;
};

export default MainNotifications;
