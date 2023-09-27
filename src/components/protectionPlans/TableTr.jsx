import React, {memo} from "react";
import Styles from "./protectionPlans.module.css";

const TableTr = ({title, sum, info, save, sum_1, info_1, save_1}) => {
    return (
        <tr>
            <td className={Styles.protectionPlans_table_header}>{title}</td>
            <td>
                <p className={Styles.protectionPlans_table_sum}>${sum}/mo</p>
                <p className={Styles.protectionPlans_table_info}>Billed annually(${info}/year)</p>
                {save && <span className={Styles.protectionPlans_table_save}>{save}% off</span>}
            </td>
            <td>
                <p className={Styles.protectionPlans_table_sum}>${sum_1}/mo</p>
                <p className={Styles.protectionPlans_table_info}>Billed biennially(${info_1}/2years)</p>
                <span className={Styles.protectionPlans_table_save}>{save_1}% off</span>
            </td>
        </tr>
    );
};

export default memo(TableTr);
