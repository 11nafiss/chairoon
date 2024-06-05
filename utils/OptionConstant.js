const ADMIN_ROLE = {
    ADMIN: "admin",
    SUPERADMIN: "super-admin",
    VIEWER: "viewer",
};

const APPLIED_STATUS = {
    PENDING: "pending",
    PROCESSED: "processed",
    ACCEPTED: "accepted",
    REJECTED: "rejected",
};

const JOB_STATUS = {
    PENDING: "pending",
    PROCESS: "process",
    DECLINED: "declined",
};

const JOB_TYPE = {
    FULL_TIME: "full-time",
    PART_TIME: "part-time",
    INTERNSHIP: "internship",
    FREELANCE: "freelance",
};

const SCHOOL_TYPE = {
    HIGHSCHOOL_DIPLOMA: "highschool-diploma",
    BACHELOR_DEGREE: "bachelor-degree",
    MASTER_DEGREE: "master-degree",
    DOCTOR_DEGREE: "doctor-degree",
    COURSE_BOOTCAMP: "course-bootcamp"
};

const JOB_SORT_BY = {
    NEWEST_FIRST: "newest",
    OLDEST_FIRST: "oldest",
    ASCENDING: "a-z",
    DESCENDING: "z-a",
};

const PAY_PERIODS = {
    ONCE: "once",
    HOURLY: "hourly",
    DAILY: "daily",
    WEEKLY: "weekly",
    MONTHLY: "monthly",
};

const WORK_PLACEMENT = {
    WFO: "work-from-office",
    WFH: "work-from-home",
    WFA: "work-from-anywhere",
};

const INPUT_TYPE = {
    TEXT: "text",
    FILE: "file",
};

const USER_GENDER = {
    MALE: "male",
    FEMALE: "female",
    SECRET: "secret",
};

const USER_ROLE = {
    USER: "user",
    Enterprise: "enterprise",
    ORGANIZATION: "organization",
    COMMUNITY: "community",
};

const RECRUIT_ROLE = {
    USER: "user",
    RECRUITER: "recruiter",
};

const USER_RELIGION = {
    ISLAM: "islam",
    PROTESTAN: "protestan",
    KATOLIK: "katolik",
    HINDU: "Hindu",
    BUDHA: "budha",
    KONGHUCU: "konghucu",
    SECRET: "secret",
};

module.exports = {
    USER_RELIGION,
    USER_ROLE,
    RECRUIT_ROLE,
    USER_GENDER,
    INPUT_TYPE,
    WORK_PLACEMENT,
    PAY_PERIODS,
    JOB_SORT_BY,
    JOB_TYPE,
    SCHOOL_TYPE,
    JOB_STATUS,
    APPLIED_STATUS,
    ADMIN_ROLE,
};